const express = require("express");
const router = express.Router();
const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

// GET /api/transfer-smart-labels — list all transfer smart labels
router.get("/", async (req, res) => {
  const { transferId } = req.query;

  const where = transferId ? { transferId } : {};

  try {
    const results = await prisma.transferSmartLabel.findMany({
      where,
      include: {
        transfer: true,
        smartLabel: true,
      },
      orderBy: { createdAt: "desc" },
    });

    const data = results.map((entry) => ({
      id: entry.id,
      transferId: entry.transferId,
      smartLabelId: entry.smartLabelId,
      serial: entry.smartLabel?.serial,
      transferReference: entry.transfer?.reference,
      createdAt: entry.createdAt,
      updatedAt: entry.updatedAt,
    }));

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch transfer smart labels.",
      detail: error.message,
    });
  }
});

// GET /api/transfer-smart-labels/:id — get one
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await prisma.transferSmartLabel.findUnique({
      where: { id },
      include: {
        transfer: true,
        smartLabel: true,
      },
    });

    if (!result) {
      return res.status(404).json({ error: "Transfer smart label not found." });
    }

    return res.status(200).json({
      id: result.id,
      transferId: result.transferId,
      smartLabelId: result.smartLabelId,
      serial: result.smartLabel?.serial,
      transferReference: result.transfer?.reference,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch transfer smart label.",
      detail: error.message,
    });
  }
});

// POST /api/transfer-smart-labels — create one
router.post("/", async (req, res) => {
  const { transferId, smartLabelId } = req.body;

  if (!transferId || !smartLabelId) {
    return res
      .status(400)
      .json({ error: "Missing required fields: transferId or smartLabelId." });
  }

  try {
    const result = await prisma.transferSmartLabel.create({
      data: {
        transferId,
        smartLabelId,
      },
    });

    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).json({
      error: "Failed to create transfer smart label.",
      detail: error.message,
    });
  }
});

// POST /api/transfer-smart-labels/bulk — create many
router.post("/bulk", async (req, res) => {
  const { transferId, smartLabelIds } = req.body;

  if (!transferId || !Array.isArray(smartLabelIds) || smartLabelIds.length === 0) {
    return res
      .status(400)
      .json({ error: "transferId and smartLabelIds[] are required." });
  }

  const data = smartLabelIds.map((smartLabelId) => ({
    transferId,
    smartLabelId,
  }));

  try {
    const result = await prisma.transferSmartLabel.createMany({
      data,
      skipDuplicates: true,
    });

    return res.status(201).json({
      message: "Bulk transfer smart labels created.",
      count: result.count,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Failed to bulk create transfer smart labels.",
      detail: error.message,
    });
  }
});

module.exports = router;
