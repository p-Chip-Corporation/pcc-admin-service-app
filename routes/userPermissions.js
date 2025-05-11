const express = require("express");
const router = express.Router();
const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

// GET /api/user-permissions/:userId — fetch all permissions for a user
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const userPermissions = await prisma.userPermission.findMany({
      where: { userId },
    });
    return res.json(userPermissions);
  } catch (error) {
    return res.status(500).json({
      error: "Failed to retrieve user permissions.",
      detail: error.message,
    });
  }
});

// POST /api/user-permissions — set or update permissions for a user
router.post("/", async (req, res) => {
  const { userId, createdById, permissions } = req.body;

  if (!userId || !createdById || !Array.isArray(permissions)) {
    return res.status(400).json({
      error:
        "Missing required fields: userId, createdById, or permissions array",
    });
  }

  try {
    const created = [];

    for (const p of permissions) {
      const { resource, permission = "VIEW" } = p;

      const record = await prisma.userPermission.upsert({
        where: {
          userId_resource_permission: {
            userId,
            resource,
            permission,
          },
        },
        update: {
          updatedAt: new Date(),
        },
        create: {
          userId,
          resource,
          permission,
          createdById,
        },
      });

      created.push(record);
    }

    return res.status(201).json(created);
  } catch (error) {
    return res.status(500).json({
      error: "Failed to create or update user permissions.",
      detail: error.message,
    });
  }
});

// PUT update a specific user permission by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { resource, permission } = req.body;

  if (!resource || !permission) {
    return res.status(400).json({
      error: "Both 'resource' and 'permission' are required fields.",
    });
  }

  try {
    const updated = await prisma.userPermission.update({
      where: { id },
      data: {
        resource,
        permission,
        updatedAt: new Date(),
      },
    });

    return res.json(updated);
  } catch (error) {
    return res.status(500).json({
      error: "Failed to update user permission.",
      detail: error.message,
    });
  }
});

module.exports = router;
