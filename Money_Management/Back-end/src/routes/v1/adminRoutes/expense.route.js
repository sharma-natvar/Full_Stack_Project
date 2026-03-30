const express = require("express");
const { expenseController } = require("../../../controllers/v1");
const validation = require("../../../middleware/validate.middleware");
const { expenseValidation } = require("../../../validations");
const router = express.Router();

router.post(
  "/create",
  validation(expenseValidation.createExpenseValidation),
  expenseController.createExpense,
);

router.put(
  "/update",
  validation(expenseValidation.updateExpenseValidation),
  expenseController.updateExpense,
);

router.get(
  "/list",
  validation(expenseValidation.listExpenseValidation),
  expenseController.getListExpense,
);

router.delete(
  "/delete/:id",
  validation(expenseValidation.deleteExpenseValidation),
  expenseController.deleteExpense,
);

router.get(
  "/details/:id",
  validation(expenseValidation.detailsExpenseValidation),
  expenseController.getDetailsExpense,
);

module.exports = router;
