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
    const [smartLabels, total] = await Promise.all([
      prisma.smartLabel.findMany({
        where,
        include: {
          owner: true,
          registeredBy: true,
        },
        skip: pagination.skip,
        take: pagination.take,
        orderBy: sort.orderBy,
      }),

      prisma.smartLabel.count({ where }),
    ]);

    const data = smartLabels.map((smartLabel) => {
      return {
        id: smartLabel.id,
        serial: smartLabel.seria,
        name: smartLabel.name,
        description: smartLabel.description,
        payload: smartLabel.payload,
        source: smartLabel.source,
        ownerName: smartLabel.owner?.name || "No current owner",
        registeredByName: smartLabel.registeredBy.name || "No current owner",
        createdAt: smartLabel.createdAt,
        updatedAt: smartLabel.updatedAt,
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
    const data = await prisma.smartLabel.findUnique({
      where: {
        id: id,
      },
      include: {
        createdBy: true,
      },
    });

    const smartLabel = {
      id: data.id,
      serial: data.seria,
      name: data.name,
      description: data.description,
      payload: data.payload,
      source: data.source,
      ownerName: data.owner?.name || "No current owner",
      registeredByName: data.registeredBy?.name,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };

    return res.status(200).json(smartLabel);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to fetch devices.", detail: error.message });
  }
});

// POST /api/devices — create a single device
router.post("/", async (req, res) => {
  const {
    serial,
    reference,
    name,
    description,
    payload,
    source,
    accountId, // the registering account
  } = req.body;

  if (!serial || !accountId) {
    return res
      .status(400)
      .json({ error: "Missing required fields: serial or accountId." });
  }

  try {
    const smartLabel = await prisma.smartLabel.create({
      data: {
        serial,
        reference,
        name,
        description,
        payload,
        source,
        registeredById: accountId,
        ownerId: accountId,
      },
    });

    return res.status(201).json(smartLabel);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to create device.", detail: error.message });
  }
});

// POST /api/devices/bulk — bulk create smart labels
router.post("/bulk", async (req, res) => {
  const { smartLabels, registeredById } = req.body;

  if (!Array.isArray(smartLabels) || !registeredById) {
    return res
      .status(400)
      .json({ error: "smartLabels array and registeredById are required." });
  }

  const data = smartLabels.map(
    ({ serial, reference, name, description, payload, source, ownerId }) => ({
      serial,
      reference,
      name,
      description,
      payload,
      source,
      registeredById,
      ownerId: registeredById,
    })
  );

  try {
    const result = await prisma.smartLabel.createMany({
      data,
      skipDuplicates: true, // avoid unique constraint errors on duplicate serials
    });

    return res
      .status(201)
      .json({
        message: "Bulk smart label creation successful.",
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
