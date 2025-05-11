const express = require("express");
const { PrismaClient } = require("../generated/prisma");
const { generateToken } = require("../utils/jwtTokens");

const router = express.Router();
const prisma = new PrismaClient();

router.get("/:localAccountId", async (req, res) => {
  const { localAccountId } = req.params;

  if (!localAccountId) {
    return res.status(400).json({ error: "Missing localAccountId parameter." });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { localAccountId },
      include: {
        permissions: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // If no permissions are set, assign defaults
    if (user.permissions.length === 0) {
      const allResources = [
        "DEVICE",
        "ACCOUNT",
        "ACCOUNT_DEVICE",
        "ACTIVATION_CODE",
        "USERS",
        "USER_PERMISSIONS",
      ];

      const defaultPermissions = allResources.map((resource) => ({
        userId: user.id,
        createdById: user.id, // assume self-created
        resource,
        permission: user.role === "ADMIN" ? "DELETE" : "VIEW",
      }));

      await prisma.userPermission.createMany({
        data: defaultPermissions,
        skipDuplicates: true,
      });

      // Re-fetch permissions
      user.permissions = await prisma.userPermission.findMany({
        where: { userId: user.id },
      });
    }

    // Construct response
    const responseData = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      permissions: user.permissions.map((p) => ({
        resource: p.resource,
        permission: p.permission,
      })),
    };

    const token = generateToken(responseData);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    return res.status(200).json(responseData);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to fetch user.", detail: error.message });
  }
});

router.post("/", async (req, res) => {
  const { localAccountId, email } = req.body;

  if (!localAccountId || !email) {
    return res
      .status(400)
      .json({ error: "Missing required fields: localAccountId and email." });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        permissions: true,
      },
    });

    if (!user) {
      return res.status(403).json({ error: "User not authorized." });
    }

    const token = generateToken(user);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    return res
      .status(200)
      .json({ success: "true", message: "Authenticate succeeded" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Authentication failed.", detail: error.message });
  }
});

// POST /api/auth/logout
router.post("/logout", (req, res) => {
  res.clearCookie("token"); // match cookie name
  res.status(200).json({ success: true });
});

module.exports = router;
