const express = require('express')
const url = require('./url')

const router = express.Router()
router.use('/url', url)
module.exports = router
