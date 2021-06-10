const db = require('../db')
const tableNames = require('../constants/tableNames')

const fields = ['id', 'slug', 'url']
module.exports = {
  async get(slug) {
    return db(tableNames.url)
      .select(fields)
      .where({
        slug,
      })
      .first()
  },

  async insert(data) {
    return db(tableNames.url).insert(data).returning('*')
  },

  async first(data) {
    return db(tableNames.url).first(data)
  },
}
