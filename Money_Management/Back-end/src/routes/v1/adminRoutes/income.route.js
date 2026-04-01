const express = require("express");
const { incomeController } = require("../../../controllers/v1");
const validation = require("../../../middleware/validate.middleware");
const { incomeValidation } = require("../../../validations");
const auth = require("../../../middleware/auth.middleware");
const router = express.Router();

router.post(
  "/create",
  auth,
  validation(incomeValidation.createIncomeValidation),
  incomeController.createIncome,
);

router.put(
  "/update",
  auth,
  validation(incomeValidation.updateIncomeValidation),
  incomeController.updateIncome,
);

router.get(
  "/list",
  auth,
  validation(incomeValidation.listIncomeValidation),
  incomeController.getListIncome,
);

router.delete(
  "/delete/:id",
  auth,
  validation(incomeValidation.deleteIncomeValidation),
  incomeController.deleteIncome,
);

router.get(
  "/details/:id",
  auth,
  validation(incomeValidation.detailsIncomeValidation),
  incomeController.getDetailsIncome,
);

module.exports = router;
