const express = require("express");
const router = express.Router();
const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

// GET /api/items — fetch items with filters and pagination
router.get("/", async (req, res) => {
  const { filters, queryText, pagination, sort } = req;

  const where = {
    ...filters,
    ...(queryText && {
      OR: [
        { name: { contains: queryText, mode: "insensitive" } },
        { description: { contains: queryText, mode: "insensitive" } },
        { serial: { contains: queryText, mode: "insensitive" } },
        {
          owner: {
            name: { contains: queryText, mode: "insensitive" },
          },
        },
      ],
    }),
  };

  try {
    const [items, total] = await Promise.all([
      prisma.item.findMany({
        where,
        include: {
          owner: true,
          registeredBy: true,
        },
        skip: pagination?.skip || 0,
        take: pagination?.take || 20,
        orderBy: sort?.orderBy || { createdAt: "desc" },
      }),
      prisma.item.count({ where }),
    ]);

    const data = items.map((item) => ({
      id: item.id,
      serial: item.serial,
      name: item.name,
      description: item.description,
      payload: item.payload,
      ownerName: item.owner?.name || "Unassigned",
      registeredByName: item.registeredBy?.name || "Unknown",
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    }));

    return res.status(200).json({
      results: data,
      meta: {
        page:
          Math.floor((pagination?.skip || 0) / (pagination?.take || 20)) + 1,
        limit: pagination?.take || 20,
        total,
        totalPages: Math.ceil(total / (pagination?.take || 20)),
      },
    });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch items.",
      detail: error.message,
    });
  }
});

// GET /api/items/:id — fetch single item by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const item = await prisma.item.findUnique({
      where: { id },
      include: {
        owner: true,
        registeredBy: true,
      },
    });

    if (!item) {
      return res.status(404).json({ error: "Item not found." });
    }

    return res.status(200).json({
      id: item.id,
      serial: item.serial,
      name: item.name,
      description: item.description,
      payload: item.payload,
      ownerName: item.owner?.name || "Unassigned",
      registeredByName: item.registeredBy?.name || "Unknown",
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to fetch item.", detail: error.message });
  }
});

// POST /api/items — create a single item
router.post("/", async (req, res) => {
  const { serial, name, description, payload, ownerId, registeredById } =
    req.body;

  if (!serial || !name || !registeredById) {
    return res
      .status(400)
      .json({
        error: "Missing required fields: serial, name, or registeredById.",
      });
  }

  try {
    const item = await prisma.item.create({
      data: {
        serial,
        name,
        description,
        payload,
        registeredById,
        ownerId: ownerId || null,
      },
    });

    return res.status(201).json(item);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to create item.", detail: error.message });
  }
});

// POST /api/items/bulk — bulk create items
router.post("/bulk", async (req, res) => {
  const { items, registeredById } = req.body;

  if (!Array.isArray(items) || !registeredById) {
    return res
      .status(400)
      .json({ error: "Items array and registeredById are required." });
  }

  const data = items.map(({ serial, name, description, payload, ownerId }) => ({
    serial,
    name,
    description,
    payload,
    registeredById,
    ownerId: ownerId || null,
  }));

  try {
    const result = await prisma.item.createMany({
      data,
      skipDuplicates: true,
    });

    return res.status(201).json({
      message: "Bulk item creation successful.",
      count: result.count,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Bulk creation failed.",
      detail: error.message,
    });
  }
});

module.exports = router;
