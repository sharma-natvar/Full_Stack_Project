const ApiError = require("../utils/apiError");
const pick = require("../utils/pick");
const httpStatus = require('http-status');
const Joi = require('joi');

const validate =
  (schema, is_validate_file_data = false) =>
  (req, res, next) => {
    const validSchema = pick(schema, [
      "params",
      "query",
      "body",
      ...(is_validate_file_data ? ["files"] : []),
    ]);
    const object = pick(req, Object.keys(validSchema));
    const { value, error } = Joi.compile(validSchema)
      .prefs({ errors: { label: "key" }, abortEarly: false })
      .validate(object, { labels: true });

    if (error) {
      const errorMessage = error.details.map((ele) => {
        return ele.message.split(" , ");
      });

      return next(
        new ApiError(
          httpStatus.BAD_REQUEST,
          errorMessage.flat()[0],
          errorMessage.flat()[1],
        ),
      );
    }
    Object.assign(req, value);
    return next();
  };

module.exports = validate;
