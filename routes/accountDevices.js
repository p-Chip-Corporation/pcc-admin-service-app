const express = require("express");
const router = express.Router();
const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

// GET /api/account-devices?accountId=...&deviceId=...
router.get("/", async (req, res) => {
  const { filters, queryText, pagination, sort } = req;
  const { accountId, deviceId } = req.query;

  const [[field, direction]] = Object.entries(sort.orderBy);

  switch (field) {
    case "accountName":
      sort.orderBy = { account: { name: direction } };
      break;
    case "deviceName":
      sort.orderBy = { device: { name: direction } };
      break;
    default:
      // No mutation needed for flat fields
      break;
  }

  const where = {
    ...filters,
    ...(accountId && { accountId }),
    ...(deviceId && { deviceId }),
    ...(queryText && {
      OR: [
        {
          device: {
            name: { contains: queryText, mode: "insensitive" },
          },
        },
        {
          account: {
            name: { contains: queryText, mode: "insensitive" },
          },
        },
        { createdBy: { name: { contains: queryText, mode: "insensitive" } } },
      ],
    }),
  };

  try {
    const [accountDevices, total] = await Promise.all([
      prisma.accountDevices.findMany({
        where,
        include: {
          account: true,
          device: true,
          createdBy: true,
        },
        skip: pagination.skip,
        take: pagination.take,
        orderBy: sort.orderBy,
      }),

      prisma.accountDevices.count({ where }),
    ]);

    const data = accountDevices.map((item) => ({
      id: item.id,
      accountId: item.accountId,
      accountName: item.account.name,
      deviceName: item.device.name,
      isActive: item.isActive,
      createdBy: item.createdBy.name,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
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
    return res.status(500).json({
      error: "Failed to fetch account-device records.",
      detail: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await prisma.accountDevices.findUnique({
      where: {
        id: id,
      },
      include: {
        createdBy: true,
        account: true,
        device: true,
      },
    });

    const accountDevice = {
      id: data.id,
      accountId: data.account.id,
      accountName: data.account.name,
      deviceId: data.device.id,
      deviceName: data.device.name,
      isActive: data.isActive,
      createdBy: data.createdBy.name,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };

    return res.status(200).json(accountDevice);
  } catch (error) {
    console.log("Error", error);
    return res
      .status(500)
      .json({ error: "Failed to fetch accounts.", detail: error.message });
  }
});

// POST /api/account-devices — create new account-device link
router.post("/", async (req, res) => {
  const user = req.user;
  const { accountId, deviceId, isActive = true } = req.body;

  if (!accountId || !deviceId) {
    return res
      .status(400)
      .json({ error: "accountId, deviceId, and createdById are required." });
  }

  try {
    const record = await prisma.accountDevices.create({
      data: {
        accountId,
        deviceId,
        isActive,
        createdById: user.userId,
      },
    });

    return res.status(201).json(record);
  } catch (error) {
    return res.status(400).json({
      error: "Failed to link account and device.",
      detail: error.message,
    });
  }
});

// PUT /api/account-devices/:id — update an existing record
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { isActive } = req.body;

  try {
    const updated = await prisma.accountDevices.update({
      where: { id },
      data: {
        isActive,
        updatedAt: new Date(),
      },
    });

    return res.json(updated);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to update record.", detail: error.message });
  }
});

// DELETE /api/account-devices/:id — delete a link
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.accountDevices.delete({ where: { id } });
    return res.json({ message: `Account-device link ${id} deleted.` });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to delete record.", detail: error.message });
  }
});

module.exports = router;
