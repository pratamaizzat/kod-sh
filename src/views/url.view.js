// this is contain all representation data to user
module.exports = {
  UniqueViolationError: {
    error: {
      statusCode: 409,
      type: 'UniqueViolationError',
      errors: [
        {
          error: 'slug must be unique',
        },
      ],
    },
  },
  urlCreated(createdUrl, req) {
    return {
      data: {
        type: 'url',
        _id: createdUrl.id,
        attributes: {
          slug: createdUrl.slug,
          url: createdUrl.url,
          shortUrl: `http://${req.hostname}/${createdUrl.slug}`,
        },
      },
    }
  },
}
