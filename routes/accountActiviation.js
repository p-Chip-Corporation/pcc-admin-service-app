const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { PrismaClient } = require("../generated/prisma");
const { transporter } = require("../utils/transporter");

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const { filters, queryText, pagination, sort } = req;
  const { accountId } = req.query;

  console.log("Filters", filters);

  const [[field, direction]] = Object.entries(sort.orderBy);

  switch (field) {
    case "accountName":
      sort.orderBy = { account: { name: direction } };
      break;
    default:
      // No mutation needed for flat fields
      break;
  }

  const where = {
    ...filters,
    ...(accountId && { accountId }),
    ...(queryText && {
      OR: [
        { email: { contains: queryText, mode: "insensitive" } },
        { account: { name: { contains: queryText, mode: "insensitive" } } },
        { createdBy: { name: { contains: queryText, mode: "insensitive" } } },
      ],
    }),
  };

  try {
    const [records, total] = await Promise.all([
      prisma.accountActivation.findMany({
        where,
        include: {
          account: true,
          createdBy: true,
        },
        skip: pagination.skip,
        take: pagination.take,
        orderBy: sort.orderBy,
      }),
      prisma.accountActivation.count({ where }),
    ]);

    const results = records.map((item) => ({
      id: item.id,
      accountName: item.account.name,
      email: item.email,
      issueDate: item.issueDate,
      expiryDate: item.expiryDate,
      isClaimed: item.isClaimed,
      claimDate: item.claimDate,
      createdBy: item.createdBy.name,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
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
      error: "Failed to fetch activations.",
      detail: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await prisma.accountActivation.findUnique({
      where: {
        id: id,
      },
      include: {
        createdBy: true,
        account: true,
      },
    });

    const accountDevice = {
      id: data.id,
      accountId: data.account.id,
      accountName: data.account.name,
      email: data.email,
      issueDate: data.issueDate,
      expiryDate: data.expiryDate,
      isClaimed: data.isClaimed,
      claimDate: data.claimDate,
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

router.post("/", async (req, res) => {
  const user = req.user;
  console.log("User", user);
  const {
    accountId,
    email,
    expiryDate: providedExpiryDate,
    isClaimed = false,
    claimDate = null,
  } = req.body;

  const expiryDate = providedExpiryDate
    ? new Date(providedExpiryDate)
    : new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours from now

  // Generate UUID and construct activation link
  const code = uuidv4();
  const activationLink = `${process.env.PCHIP_CLOUD_BASEURL}/activate/${code}`;

  // Validate inputs
  if (!accountId || !email) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    const activation = await prisma.accountActivation.create({
      data: {
        accountId,
        email,
        code,
        activationLink,
        expiryDate: new Date(expiryDate),
        isClaimed,
        claimDate: claimDate ? new Date(claimDate) : null,
        createdById: user.userId,
      },
      include: {
        account: true,
      },
    });

    // Prepare email content
    const mailOptions = {
      from: `"p-Chip Cloud" <${process.env.EMAIL_USER}>`,
      to: activation.email,
      subject: "Welcome to the p-Chip Cloud!",
      text: `An account for ${activation.account.name} has been created. Please follow this link to activate your account: ${activationLink}`,
      html: `
        <p>An account for <strong>${activation.account.name}</strong> has been created.</p>
        <p>Please click the link below to verify your identity and activate your account:</p>
        <p><a href="${activationLink}">${activationLink}</a></p>
      `,
    };

    // Require an smtp service for this
    //await transporter.sendMail(mailOptions);

    return res.status(201).json(activation);
  } catch (error) {
    console.error("Activation creation failed:", error);
    return res.status(400).json({
      error: "Failed to create activation.",
      detail: error.message,
    });
  }
});

// PUT /api/account-activations/:id — update an activation
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { email, activationLink, expiryDate, isClaimed, claimDate } = req.body;

  try {
    const updated = await prisma.accountActivation.update({
      where: { id },
      data: {
        email,
        activationLink,
        expiryDate: expiryDate ? new Date(expiryDate) : undefined,
        isClaimed,
        claimDate: claimDate ? new Date(claimDate) : null,
        updatedAt: new Date(),
      },
    });

    return res.json(updated);
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to update activation.", detail: error.message });
  }
});

// DELETE /api/account-activations/:id — delete an activation
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.accountActivation.delete({ where: { id } });
    return res.json({ message: `Activation ${id} deleted.` });
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to delete activation.", detail: error.message });
  }
});

module.exports = router;
