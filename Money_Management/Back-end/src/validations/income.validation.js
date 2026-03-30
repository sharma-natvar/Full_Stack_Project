const Joi = require("joi");
const { objectId } = require("./custom.validation");

const createIncomeValidation = {
  body: Joi.object().keys({
    title: Joi.string().trim().required(),
    // type: Joi.string().trim().required(),
    description: Joi.string().trim().required(),
    category: Joi.string().trim().required(),
    date: Joi.date().required(),
    amount: Joi.number().min(0).required(),
  }),
};

const updateIncomeValidation = {
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

const detailsIncomeValidation = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

const listIncomeValidation = {
  query: Joi.object().unknown(false),
};

const deleteIncomeValidation = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

module.exports = {
  createIncomeValidation,
  updateIncomeValidation,
  detailsIncomeValidation,
  deleteIncomeValidation,
  listIncomeValidation
};
