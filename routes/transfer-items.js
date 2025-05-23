const express = require("express");
const router = express.Router();
const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

// GET /api/transfer-items — list all transfer items
router.get("/", async (req, res) => {
  const { transferId } = req.query;

  const where = transferId ? { transferId } : {};

  try {
    const transferItems = await prisma.transferItem.findMany({
      where,
      include: {
        transfer: true,
        item: true,
      },
      orderBy: { createdAt: "desc" },
    });

    const data = transferItems.map((ti) => ({
      id: ti.id,
      transferId: ti.transferId,
      itemId: ti.itemId,
      itemName: ti.item?.name,
      transferReference: ti.transfer?.reference,
      createdAt: ti.createdAt,
      updatedAt: ti.updatedAt,
    }));

    return res.status(200).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({
        error: "Failed to fetch transfer items.",
        detail: error.message,
      });
  }
});

// GET /api/transfer-items/:id — get a specific transfer item
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const ti = await prisma.transferItem.findUnique({
      where: { id },
      include: {
        transfer: true,
        item: true,
      },
    });

    if (!ti) {
      return res.status(404).json({ error: "Transfer item not found." });
    }

    return res.status(200).json({
      id: ti.id,
      transferId: ti.transferId,
      itemId: ti.itemId,
      itemName: ti.item?.name,
      transferReference: ti.transfer?.reference,
      createdAt: ti.createdAt,
      updatedAt: ti.updatedAt,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to fetch transfer item.", detail: error.message });
  }
});

// POST /api/transfer-items — create a single transfer item
router.post("/", async (req, res) => {
  const { transferId, itemId } = req.body;

  if (!transferId || !itemId) {
    return res
      .status(400)
      .json({ error: "Missing required fields: transferId or itemId." });
  }

  try {
    const result = await prisma.transferItem.create({
      data: {
        transferId,
        itemId,
      },
    });

    return res.status(201).json(result);
  } catch (error) {
    return res
      .status(400)
      .json({
        error: "Failed to create transfer item.",
        detail: error.message,
      });
  }
});

// POST /api/transfer-items/bulk — create many transfer items
router.post("/bulk", async (req, res) => {
  const { transferId, itemIds } = req.body;

  if (!transferId || !Array.isArray(itemIds) || itemIds.length === 0) {
    return res
      .status(400)
      .json({ error: "transferId and itemIds[] are required." });
  }

  const data = itemIds.map((itemId) => ({
    transferId,
    itemId,
  }));

  try {
    const result = await prisma.transferItem.createMany({
      data,
      skipDuplicates: true,
    });

    return res.status(201).json({
      message: "Bulk transfer items created.",
      count: result.count,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Failed to create transfer items.",
      detail: error.message,
    });
  }
});

module.exports = router;
