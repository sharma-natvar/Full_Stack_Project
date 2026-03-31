function ApiError(statusCode, message, subMessage, errorType, isOperational = true, stack = '') {
  const error = new Error(message);

  error.statusCode = statusCode;
  error.isOperational = isOperational;
  error.error = message;
  error.subMessage = subMessage;
  error.errorType = errorType;

  if (stack) {
    error.stack = stack;
  } else {
    Error.captureStackTrace(error, ApiError);
  }

  return error;
}

module.exports = ApiError;