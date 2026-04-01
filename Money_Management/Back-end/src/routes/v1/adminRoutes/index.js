const express = require('express');
const router = express.Router();
const incomeRoute = require('./income.route')
const expenseRoute = require('./expense.route')
const authRoute = require('./auth.route')

router.use('/income',incomeRoute)
router.use('/expense',expenseRoute)
router.use('/auth',authRoute)


module.exports = router