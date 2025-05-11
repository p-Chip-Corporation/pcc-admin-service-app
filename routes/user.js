const express = require("express");
const router = express.Router();
const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

const roleLabels = {
  ADMIN: "Administrator",
  MANAGER: "Manager",
  IC: "Individual Contributor",
};

// GET /api/users — get all users
router.get("/", async (req, res) => {
  const { filters, queryText, pagination, sort } = req;

  const where = {
    ...filters,
    ...(queryText && {
      OR: [
        { name: { contains: queryText, mode: "insensitive" } },
        { createdBy: { name: { contains: queryText, mode: "insensitive" } } },
      ],
    }),
  };

  try {
    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        include: { createdBy: true },
        skip: pagination.skip,
        take: pagination.take,
        orderBy: sort.orderBy,
      }),
      prisma.user.count({ where }),
    ]);

    const data = users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      roleLabel: roleLabels[user.role] || "Unknown",
      isActive: user.isActive,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }));

    return res.status(200).json({
      results: data,
      meta: {
        page: Math.floor(pagination.skip / pagination.take) + 1,
        limit: pagination.take,
        total,
        totalPages: Math.ceil(total / pagination.take),
      },
    });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({ error: "Failed to fetch users." });
  }
});

// GET /api/users — get all users
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch users." });
  }
});

// POST /api/users — create a new user
router.post("/", async (req, res) => {
  const { name, email, role, isActive } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        role,
        isActive: isActive ?? true,
      },
    });

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
      createdById: req.user.userId,
      resource,
      permission: user.role === "ADMIN" ? "DELETE" : "VIEW",
    }));

    await prisma.userPermission.createMany({
      data: defaultPermissions,
      skipDuplicates: true,
    });

    // Construct response
    const responseData = {
      userId: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    };
    return res.status(201).json(responseData);
  } catch (error) {
    console.log("Error", error);
    return res
      .status(400)
      .json({ error: "Failed to create user.", detail: error.message });
  }
});

// PUT /api/users/:id — update a user by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { localAccountId, name, email, role, isActive } = req.body;
  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        localAccountId,
        name,
        email,
        role,
        isActive,
        updatedAt: new Date(),
      },
    });
    return res.json(updatedUser);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to update user.", detail: error.message });
  }
});

// DELETE /api/users/:id — delete a user by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({ where: { id } });
    return res.json({ message: `User ${id} deleted.` });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to delete user.", detail: error.message });
  }
});

module.exports = router;
