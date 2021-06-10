const errorTypes = {
  ValidationError: 422,
  UniqueViolationError: 409,
}

const errorMessage = {
  UniqueViolationError: 'Already Exist',
}

function notFound(req, res, next) {
  const error = new Error(`Not Found Pages -- ${req.originalUrl}`)
  res.status(404)
  next(error)
}

// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {
  const statusCode =
    res.statusCode === 200 ? errorTypes[error.name] || 500 : res.statusCode
  res.status(statusCode)
  res.json({
    statusCode,
    message: errorMessage[error.name] || error.message,
    stack: process.env.NODE_ENV === 'production' ? '🤘🤘🤘' : error.stack,
    errors: error.errors || undefined,
  })
}

module.exports = {
  notFound,
  errorHandler,
}
