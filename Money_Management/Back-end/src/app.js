const express = require('express');
const cors = require('cors')
const apiRoute = require('./routes')

const app = express()

app.use(express.json());
app.use(cors())

app.use('/api',apiRoute)

 module.exports = app