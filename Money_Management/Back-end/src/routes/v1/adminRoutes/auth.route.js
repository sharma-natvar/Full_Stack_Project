const express = require("express");
const { authValidation } = require("../../../validations");
const { authController } = require("../../../controllers/v1");
const router = express.Router();
const validation = require('../../../middleware/validate.middleware')

router.post(
  "/signup",
  validation(authValidation.register),
  authController.register,
);

router.post("/login", validation(authValidation.login), authController.login);

module.exports = router;
