const Expense = require("../models/expense.model");

/**
 * Expense data create
 * @param {Object} reqBody
 * @returns {Promise<Service>}
 */
const create = (reqBody) => {
  return Expense.create(reqBody);
};

/**
 * Get all data
 * @param {Object} filter 
 * @returns {Promise<Service>}
 */
const getAll = (filter) => {
  return Expense.find(filter);
};

/**
 * Get details
 * @param {Object} filter 
 * @returns {Promise<Service>}
 */
const getDetails = (filter) => {
  return Expense.findOne(filter);
};

/**
 * Update object
 * @param {Object} filter 
 * @param {Object} reqBody 
 * @returns {Promise<Service>}
 */
const update = (filter , reqBody) => {
  return Expense.findOneAndUpdate(filter , reqBody);
};

/**
 * delete object
 * @param {Object} filter 
 * @returns {Promise<Service>}
 */
const deleteData = (filter , reqBody) => {
  return Expense.findOneAndUpdate(filter , reqBody);
};




module.exports = {
    create,
    deleteData,
    update,
    getDetails,
    getAll
}