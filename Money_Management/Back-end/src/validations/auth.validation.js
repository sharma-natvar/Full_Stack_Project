const Joi = require("joi");
const {password} = require('./custom.validation')

const register = {
  body: Joi.object().keys({
    first_name: Joi.string().trim().max(20).required(),
    last_name: Joi.string().trim().max(20).required(),
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().custom(password).required(),
  }),
};

const login = {
  body: Joi.object().keys({
    email: Joi.string().email().required().messages({
      "string.email": "Please enter a valid email! ",
      "any.required": "Email is required!",
    }),
    password: Joi.string().custom(password).required(),
  }),
};


module.exports = {
    register,
    login
}