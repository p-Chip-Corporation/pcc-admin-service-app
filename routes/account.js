const express = require("express");
const router = express.Router();
const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

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
    const [accounts, total] = await Promise.all([
      prisma.account.findMany({
        where,
        include: { createdBy: true },
        skip: pagination.skip,
        take: pagination.take,
        orderBy: sort.orderBy,
      }),
      prisma.account.count({ where }),
    ]);

    const results = accounts.map((a) => ({
      id: a.id,
      name: a.name,
      isActive: a.isActive,
      createdBy: a.createdBy.name,
      createdAt: a.createdAt,
      updatedAt: a.updatedAt,
    }));

    return res.status(200).json({
      results,
      meta: {
        page: Math.floor(pagination.skip / pagination.take) + 1,
        limit: pagination.take,
        total,
        totalPages: Math.ceil(total / pagination.take),
      },
    });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch accounts.",
      detail: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await prisma.account.findUnique({
      where: {
        id: id,
      },
      include: {
        createdBy: true,
        devices: true,
        activations: true,
      },
    });

    const account = {
      id: data.id,
      name: data.name,
      isActive: data.isActive,
      createdBy: data.createdBy.name,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };

    return res.status(200).json(account);
  } catch (error) {
    console.log("Error", error);
    return res
      .status(500)
      .json({ error: "Failed to fetch accounts.", detail: error.message });
  }
});

// POST /api/accounts — create a new account
router.post("/", async (req, res) => {
  const { name, isActive = false } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    const newAccount = await prisma.account.create({
      data: {
        name,
        isActive,
        createdById: req.user.userId,
      },
    });

    return res.status(201).json(newAccount);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to create account.", detail: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, isActive } = req.body;

  try {
    // Update the account
    const updated = await prisma.account.update({
      where: { id },
      data: {
        name,
        isActive,
        updatedAt: new Date(),
      },
    });

    // If the account is deactivated, deactivate all related account devices
    if (isActive === false) {
      await prisma.accountDevices.updateMany({
        where: {
          accountId: id,
          isActive: true,
        },
        data: {
          isActive: false,
          updatedAt: new Date(),
        },
      });
    }

    return res.status(200).json(updated);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to update account.", detail: error.message });
  }
});

// DELETE /api/accounts/:id — delete an account
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.account.delete({ where: { id } });
    return res.json({ message: `Account ${id} deleted.` });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to delete account.", detail: error.message });
  }
});

module.exports = router;
