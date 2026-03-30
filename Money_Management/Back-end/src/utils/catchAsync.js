const catchAsync = (fs) => (req, res, next) => {
  Promise.resolve(fs(req, res, next)).catch((err) => next(err));
};

module.exports = catchAsync;
