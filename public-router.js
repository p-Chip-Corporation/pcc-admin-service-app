const express = require("express");
const router = express.Router();
const smartLabelsRouter = require("./routes/smartLabel");
const itemsRouter = require("./routes/items");
const transferRouter = require("./routes/transfers");
const transferItemsRouter = require("./routes/transfer-items");
const transferSmartLabelsRouter = require("./routes/transfer-smart-labels");

router.use("/smart-labels", smartLabelsRouter);
router.use("/items", itemsRouter);
router.use("/tranfers", transferRouter);
router.use("/transer-items", transferItemsRouter);
router.use("/transfer-smart-labels", transferSmartLabelsRouter);

module.exports = router;
