const express = require("express");
const router = express.Router();
const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

// GET /api/transfers — fetch all transfers with optional filters, pagination, and sorting
router.get("/", async (req, res) => {
  const { filters, queryText, pagination, sort } = req;

  const where = {
    ...filters,
    ...(queryText && {
      OR: [
        { reference: { contains: queryText, mode: "insensitive" } },
        {
          seller: {
            name: { contains: queryText, mode: "insensitive" },
          },
        },
        {
          reciever: {
            name: { contains: queryText, mode: "insensitive" },
          },
        },
      ],
    }),
  };

  try {
    const [transfers, total] = await Promise.all([
      prisma.transfer.findMany({
        where,
        include: {
          seller: true,
          reciever: true,
        },
        skip: pagination?.skip || 0,
        take: pagination?.take || 20,
        orderBy: sort?.orderBy || { createdAt: "desc" },
      }),
      prisma.transfer.count({ where }),
    ]);

    const data = transfers.map((t) => ({
      id: t.id,
      reference: t.reference,
      transferType: t.transferType,
      sellerName: t.seller?.name,
      recieverName: t.reciever?.name,
      createdAt: t.createdAt,
      updatedAt: t.updatedAt,
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
      error: "Failed to fetch transfers.",
      detail: error.message,
    });
  }
});

// GET /api/transfers/:id — fetch a single transfer by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const transfer = await prisma.transfer.findUnique({
      where: { id },
      include: {
        seller: true,
        reciever: true,
        items: true,
        smartLabels: true,
      },
    });

    if (!transfer) {
      return res.status(404).json({ error: "Transfer not found." });
    }

    return res.status(200).json({
      id: transfer.id,
      reference: transfer.reference,
      transferType: transfer.transferType,
      sellerName: transfer.seller?.name,
      recieverName: transfer.reciever?.name,
      items: transfer.items,
      smartLabels: transfer.smartLabels,
      createdAt: transfer.createdAt,
      updatedAt: transfer.updatedAt,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to fetch transfer.", detail: error.message });
  }
});

// POST /api/transfers — create a single transfer
router.post("/", async (req, res) => {
  const {
    reference,
    sellerId,
    recieverId,
    transferType,
    itemIds = [],
    smartLabelIds = [],
  } = req.body;

  if (!reference || !sellerId || !recieverId || !transferType) {
    return res.status(400).json({
      error:
        "Missing required fields: reference, sellerId, recieverId, or transferType.",
    });
  }

  try {
    const transfer = await prisma.transfer.create({
      data: {
        reference,
        sellerId,
        recieverId,
        transferType,
        items: {
          create: itemIds.map((itemId) => ({ itemId })),
        },
        smartLabels: {
          create: smartLabelIds.map((smartLabelId) => ({ smartLabelId })),
        },
      },
    });

    return res.status(201).json(transfer);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to create transfer.", detail: error.message });
  }
});

module.exports = router;
