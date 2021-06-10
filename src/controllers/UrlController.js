const { nanoid } = require('nanoid')
const { validationURL } = require('../utils/customValidation')
const query = require('../utils/url.queries')
const view = require('../views/url.view')

exports.create = async (req, res, next) => {
  const result = validationURL(req.body)
  if (result.error) return res.status(422).json(result)
  // eslint-disable-next-line prefer-const
  let { slug, url } = req.body
  try {
    if (!slug) slug = nanoid(5)
    slug = slug.toLowerCase()
    const foundUrl = await query.get(slug)
    if (foundUrl) return res.status(409).json(view.UniqueViolationError)
    const [createdUrl] = await query.insert({ slug, url })
    return res.status(201).json(view.urlCreated(createdUrl, req))
  } catch (err) {
    return next(err)
  }
}
