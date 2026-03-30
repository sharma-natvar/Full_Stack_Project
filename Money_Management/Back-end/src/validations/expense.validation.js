const Joi = require("joi");
const { objectId } = require("./custom.validation");

const createExpenseValidation = {
  body: Joi.object().keys({
    title: Joi.string().trim().required(),
    // type: Joi.string().trim().optional(),
    description: Joi.string().trim().required(),
    category: Joi.string().trim().required(),
    date: Joi.date().required(),
    amount: Joi.number().min(0).required(),
  }),
};

const updateExpenseValidation = {
  body: Joi.object().keys({
    title: Joi.string().trim().required(),
    // type: Joi.string().trim().required(),
    description: Joi.string().trim().required(),
    category: Joi.string().trim().required(),
    date: Joi.date().required(),
    amount: Joi.number().min(0).required(),
    id: Joi.string().required().custom(objectId),
  }),
};

const detailsExpenseValidation = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

const listExpenseValidation = {
  query: Joi.object().unknown(false),
};

const deleteExpenseValidation = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  createExpenseValidation,
  updateExpenseValidation,
  detailsExpenseValidation,
  deleteExpenseValidation,
  listExpenseValidation
};
