const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const dotenv = require('dotenv')
const api = require('./api')
const { notFound, errorHandler } = require('./middlewares/hendler')

dotenv.config()
const app = express()

app.use(helmet())
app.use(morgan('tiny'))
app.use(express.json())
app.get('/', (req, res) => {
  res.status(200).json({
    message: '🚀 welcome to kod-sh url shortner 🚀',
  })
})
app.use('/api/v1', api)
app.use(notFound)
app.use(errorHandler)

module.exports = app
