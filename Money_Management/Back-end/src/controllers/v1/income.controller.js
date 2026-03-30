const { default: mongoose } = require("mongoose");
const { incomeService } = require("../../services");
const catchAsync = require("../../utils/catchAsync");
const { status } = require("http-status");

const createIncome = catchAsync(async (req, res) => {
  
  const createTransaction = await incomeService.create(req.body);

  console.log(`========createTransaction======`, createTransaction);

  res.status(status.CREATED).json({
    success: true,
    data: createTransaction,
    message: "Add success",
  });
});

const getListIncome = catchAsync(async (req, res) => {

  const listTransaction = await incomeService.getAll({ deletedAt: null });

  res.status(status.OK).json({
    success: true,
    data: listTransaction,
    message: "Get list success",
  });
});

const getDetailsIncome = catchAsync(async (req, res) => {

  const detailsTransaction = await incomeService.getDetails({
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

const deleteIncome = catchAsync(async (req, res) => {
  console.log(`========req.params======`, req.params);

  const deleteTransaction = await incomeService.deleteData(
    {
      deletedAt: null,
      _id: new mongoose.Types.ObjectId(req.params),
    },
    { deletedAt: new Date() },
  );

  console.log(`========deleteTransaction======`, deleteTransaction);

  res.status(status.OK).json({
    success: true,
    // data: ,
    message: "deleted success",
  });
});

const updateIncome = catchAsync(async (req, res) => {
  console.log(`========data======`);
  console.log(`========req.body======`, req.body);

  const { id, ...reqBody } = req.body;

  const updateTransaction = await incomeService.update(
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
  createIncome,
  getListIncome,
  deleteIncome,
  getDetailsIncome,
  updateIncome,
};
