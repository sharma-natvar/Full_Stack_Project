const User = require("../models/user.model");


/**
 * User data create
 * @param {Object} reqBody
 * @returns {Promise<Service>}
 */
const create = (reqBody) => {
  return User.create(reqBody);
};

/**
 * Get all data
 * @param {Object} filter 
 * @returns {Promise<Service>}
 */
const getAll = (filter) => {
  return User.find(filter);
};

/**
 * Get details
 * @param {Object} filter 
 * @returns {Promise<Service>}
 */
const getDetails = (filter) => {
  return User.findOne(filter);
};

/**
 * Update object
 * @param {Object} filter 
 * @param {Object} reqBody 
 * @returns {Promise<Service>}
 */
const update = (filter , reqBody) => {
  return User.findOneAndUpdate(filter , reqBody);
};

/**
 * delete object
 * @param {Object} filter 
 * @returns {Promise<Service>}
 */
const deleteData = (filter , reqBody) => {
  return User.findOneAndUpdate(filter , reqBody);
};




module.exports = {
    create,
    deleteData,
    update,
    getDetails,
    getAll
}