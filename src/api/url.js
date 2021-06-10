const express = require('express')
const { create } = require('../controllers/UrlController')

const router = express.Router()
router.route('/').post(create)

module.exports = router
