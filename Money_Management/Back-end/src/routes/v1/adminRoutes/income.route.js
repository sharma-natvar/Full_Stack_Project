const express = require("express");
const { incomeController } = require("../../../controllers/v1");
const validation = require("../../../middleware/validate.middleware");
const { incomeValidation } = require("../../../validations");
const router = express.Router();

router.post(
  "/create",
  validation(incomeValidation.createIncomeValidation),
  incomeController.createIncome,
);

router.put(
  "/update",
  validation(incomeValidation.updateIncomeValidation),
  incomeController.updateIncome,
);

router.get(
  "/list",
  validation(incomeValidation.listIncomeValidation),
  incomeController.getListIncome,
);

router.delete(
  "/delete/:id",
  validation(incomeValidation.deleteIncomeValidation),
  incomeController.deleteIncome,
);

router.get(
  "/details/:id",
  validation(incomeValidation.detailsIncomeValidation),
  incomeController.getDetailsIncome,
);

module.exports = router;
