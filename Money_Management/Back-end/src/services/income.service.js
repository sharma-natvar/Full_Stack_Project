const Income = require("../models/income.model");

/**
 * Income data create
 * @param {Object} reqBody
 * @returns {Promise<Service>}
 */
const create = (reqBody) => {
  return Income.create(reqBody);
};

/**
 * Get all data
 * @param {Object} filter
 * @returns {Promise<Service>}
 */
const getAll = (filter) => {
  return Income.find(filter);
};

/**
 * Get details
 * @param {Object} filter
 * @returns {Promise<Service>}
 */
const getDetails = (filter) => {
  return Income.findOne(filter);
};

/**
 * Update object
 * @param {Object} filter
 * @param {Object} reqBody
 * @returns {Promise<Service>}
 */
const update = (filter, reqBody) => {
  return Income.findOneAndUpdate(filter, reqBody);
};

/**
 * delete object
 * @param {Object} filter
 * @returns {Promise<Service>}
 */
const deleteData = (filter, body) => {
  return Income.findOneAndUpdate(filter, body);
};

module.exports = {
  create,
  deleteData,
  update,
  getDetails,
  getAll,
};
