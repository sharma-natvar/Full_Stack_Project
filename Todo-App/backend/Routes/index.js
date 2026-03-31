const express = require('express')
const routes = express.Router()
const userRoute = require('./user.route')
const listRoute = require('./list.route')


routes.use('/user', userRoute)
routes.use('/list', listRoute )


module.exports = routes