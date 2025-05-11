const express = require("express");
const router = express.Router();
const userRouter = require("./routes/user");
const userPermissionRouter = require("./routes/userPermissions");
const accountRouter = require("./routes/account");
const accountActivationRouter = require("./routes/accountActiviation");
const accountDeviceRouter = require("./routes/accountDevices");
const deviceRouter = require("./routes/device");

router.use("/users", userRouter);
router.use("/users-permission", userPermissionRouter);
router.use("/accounts", accountRouter);
router.use("/accounts-activation", accountActivationRouter);
router.use("/accounts-devices", accountDeviceRouter);
router.use("/devices", deviceRouter);

module.exports = router;
