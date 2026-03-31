const adminRoute = require("./adminRoutes");
const express = require("express");
const router = express.Router();

router.use("/admin", adminRoute);

module.exports = router;
