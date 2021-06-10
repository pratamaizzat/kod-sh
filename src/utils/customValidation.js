const validationURL = (data) => {
  const { slug, url } = data

  const messages = []

  // eslint-disable-next-line no-useless-escape
  const patternSlug = /^[a-zA-Z0-9_\-]{5,30}$/
  const patterUrl = new RegExp(
    '^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  )

  if (slug) {
    if (typeof slug !== 'string') {
      messages.push({ error: 'slug must be type of string' })
    } else if (!patternSlug.test(slug))
      messages.push({
        error: 'slug only contain alphanum, -, and _ . with min length is 5',
      })
  }

  if (!url) messages.push({ error: 'url is required' })
  else if (!patterUrl.test(url))
    messages.push({ error: 'url must be valid url' })

  if (messages.length !== 0) {
    return {
      error: {
        statusCode: 422,
        type: 'ValidationError',
        errors: messages,
      },
      value: undefined,
    }
  }

  return {
    error: undefined,
    value: {
      slug,
      url,
    },
  }
}

module.exports = { validationURL }
