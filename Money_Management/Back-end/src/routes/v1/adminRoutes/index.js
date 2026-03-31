const express = require('express');
const router = express.Router();
const incomeRoute = require('./income.route')
const expenseRoute = require('./expense.route')

router.use('/income',incomeRoute)
router.use('/expense',expenseRoute)


module.exports = router