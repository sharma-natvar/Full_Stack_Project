const express = require("express");
const { expenseController } = require("../../../controllers/v1");
const validation = require("../../../middleware/validate.middleware");
const { expenseValidation } = require("../../../validations");
const auth = require("../../../middleware/auth.middleware");
const router = express.Router();

router.post(
  "/create",
  auth,
  validation(expenseValidation.createExpenseValidation),
  expenseController.createExpense,
);

router.put(
  "/update",
  auth,
  validation(expenseValidation.updateExpenseValidation),
  expenseController.updateExpense,
);

router.get(
  "/list",
  auth,
  validation(expenseValidation.listExpenseValidation),
  expenseController.getListExpense,
);

router.delete(
  "/delete/:id",
  auth,
  validation(expenseValidation.deleteExpenseValidation),
  expenseController.deleteExpense,
);

router.get(
  "/details/:id",
  auth,
  validation(expenseValidation.detailsExpenseValidation),
  expenseController.getDetailsExpense,
);

module.exports = router;
