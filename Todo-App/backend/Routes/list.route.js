const express = require('express')
const route = express.Router()
const { listController } = require('../controller')


route.post('/post', listController.listPost)
route.get('/get/:userId', listController.listGet)
route.put('/update/:id' , listController.listUpdate)
route.delete('/delete/:id', listController.listDelete)


module.exports = route