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
        {
          accounts: {
            some: {
              account: {
                name: { contains: queryText, mode: "insensitive" },
              },
            },
          },
        },
        { createdBy: { name: { contains: queryText, mode: "insensitive" } } },
      ],
    }),
  };

  try {
    const [devices, total] = await Promise.all([
      prisma.device.findMany({
        where,
        include: {
          createdBy: true,
          accounts: {
            where: { isActive: true },
            include: { account: true },
          },
        },
        skip: pagination.skip,
        take: pagination.take,
        orderBy: sort.orderBy,
      }),

      prisma.device.count({ where }),
    ]);

    const data = devices.map((device) => {
      const activeAccount = device.accounts[0];
      return {
        id: device.id,
        name: device.name,
        isActive: device.isActive,
        createdBy: device.createdBy.name,
        createdAt: device.createdAt,
        updatedAt: device.updatedAt,
        accountName: activeAccount?.account?.name || null,
        accountId: activeAccount?.account?.id || null,
      };
    });

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
    return res.status(500).json({
      error: "Failed to fetch devices.",
      detail: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await prisma.device.findUnique({
      where: {
        id: id,
      },
      include: {
        createdBy: true,
      },
    });

    const device = {
      id: data.id,
      name: data.name,
      isActive: data.isActive,
      createdBy: data.createdBy.name,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };

    return res.status(200).json(device);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to fetch devices.", detail: error.message });
  }
});

// POST /api/devices — create a single device
router.post("/", async (req, res) => {
  const { name, isActive = true } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    const data = await prisma.device.create({
      data: {
        name,
        isActive,
        createdById: req.user.userId,
      },
    });

    const device = {
      id: data.id,
      name: data.name,
      isActive: data.isActive,
      createdBy: data.createdBy.name,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };

    return res.status(201).json(device);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to create device.", detail: error.message });
  }
});

// POST /api/devices/bulk — bulk create devices
router.post("/bulk", async (req, res) => {
  const { devices, createdById } = req.body;

  if (!Array.isArray(devices) || !createdById) {
    return res
      .status(400)
      .json({ error: "Devices array and createdById are required." });
  }

  const data = devices.map(({ name, isActive = true }) => ({
    name,
    isActive,
    createdById,
  }));

  try {
    const result = await prisma.device.createMany({
      data,
      skipDuplicates: true,
    });
    return res
      .status(201)
      .json({ message: "Bulk upload successful.", count: result.count });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Bulk upload failed.", detail: error.message });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, isActive } = req.body;

  try {
    // Update the device
    const updatedDevice = await prisma.device.update({
      where: { id },
      data: {
        name,
        isActive,
        updatedAt: new Date(),
      },
    });

    // If device is deactivated, deactivate all its related AccountDevices
    if (isActive === false) {
      await prisma.accountDevices.updateMany({
        where: { deviceId: id },
        data: { isActive: false },
      });
    }

    return res.status(200).json(updatedDevice);
  } catch (error) {
    return res.status(400).json({
      error: "Failed to update device.",
      detail: error.message,
    });
  }
});

// DELETE /api/devices/:id — delete device by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.device.delete({ where: { id } });
    return res.json({ message: `Device ${id} deleted.` });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to delete device.", detail: error.message });
  }
});

module.exports = router;
