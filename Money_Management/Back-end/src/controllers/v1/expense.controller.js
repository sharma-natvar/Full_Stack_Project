const { default: mongoose } = require("mongoose");
const { expenseService } = require("../../services");
const catchAsync = require("../../utils/catchAsync");
const { status } = require("http-status");

const createExpense = catchAsync(async (req, res) => {
  console.log(`========data======`);
  console.log(`========req.body======`, req.body);

  const createTransaction = await expenseService.create(req.body);

  console.log(`========createTransaction======`, createTransaction);

  res.status(status.OK).json({
    success: true,
    data: createTransaction,
    message: "Add success",
  });
});

const getListExpense = catchAsync(async (req, res) => {
  console.log(`========data======`);
  console.log(`========req.body======`, req.body);

  const listTransaction = await expenseService.getAll({ deletedAt: null });

  res.status(status.OK).json({
    success: true,
    data: listTransaction,
    message: "Get list success",
  });
});

const getDetailsExpense = catchAsync(async (req, res) => {
  console.log(`========data======`);
  console.log(`========req.body======`, req.body);

  const detailsTransaction = await expenseService.getDetails({
    deletedAt: null,
    _id: new mongoose.Types.ObjectId(req.params),
  });

  console.log(`========detailsTransaction======`, detailsTransaction);

  res.status(status.OK).json({
    success: true,
    data: detailsTransaction,
    message: "Get details success",
  });
});

const deleteExpense = catchAsync(async (req, res) => {
  console.log(`========data======`);

  const deleteTransaction = await expenseService.deleteData({
    deletedAt: null,
    _id: new mongoose.Types.ObjectId(req.params),
  },{deletedAt: new Date()});

  console.log(`========deleteTransaction======`, deleteTransaction);

  res.status(status.OK).json({
    success: true,
    message: "deleted success",
  });
});

const updateExpense = catchAsync(async (req, res) => {
  console.log(`========data======`);
  console.log(`========req.body======`, req.body);

  const { id, ...reqBody } = req.body;

  const updateTransaction = await expenseService.update(
    { _id: new mongoose.Types.ObjectId(id), deletedAt: null },
    reqBody,
  );

  res.status(status.OK).json({
    success: true,
    data: updateTransaction,
    message: "update success",
  });
});

module.exports = {
  createExpense,
  getListExpense,
  deleteExpense,
  getDetailsExpense,
  updateExpense,
};
