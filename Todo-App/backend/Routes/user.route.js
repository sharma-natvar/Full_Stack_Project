const express = require('express')
const { userController } = require('../controller')
const route = express.Router()


route.post('/register', userController.registerUser)
route.post('/login', userController.loginUser )


module.exports = route