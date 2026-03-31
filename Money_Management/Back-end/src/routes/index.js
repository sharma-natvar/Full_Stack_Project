const v1Route = require('./v1')
const express = require("express");
const router = express.Router();

router.use("/v1", v1Route);

module.exports = router;
