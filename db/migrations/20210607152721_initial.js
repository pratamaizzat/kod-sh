const tableNames = require('../../src/constants/tableNames')

function addDefaultColumns(table) {
  table.timestamps(false, true)
  table.datetime('deleted_at')
}

/**
 * @param {import('knex')} knex
 */
exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.url, (table) => {
    table.increments().notNullable()
    table.string('slug', 30).nullable().unique()
    table.string('url', 2000).notNullable()
    addDefaultColumns(table)
  })
}

/**
 * @param {import('knex')} knex
 */
exports.down = async (knex) => {
  await knex.schema.dropTable(tableNames.url)
}
