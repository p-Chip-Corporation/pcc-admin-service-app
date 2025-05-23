require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient();

const router = require("./router");
const authRouter = require("./routes/auth");
const publicRouter = require("./public-router");
const authMiddleware = require("./middleware/authMiddleware");
const queryMiddleware = require("./middleware/queryMiddleware");

const app = express();

app.use(cookieParser());
app.use(express.json());

const CORS_ORIGIN = process.env.CORS_ORIGIN?.split(",").map((origin) =>
  origin.trim()
);
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
);

app.use("/auth", authRouter);
app.use("/api", authMiddleware, queryMiddleware, router);
app.use("/public", publicRouter);

app.listen(PORT, () => {
  console.log(`Server is running port ${PORT}`);
});
