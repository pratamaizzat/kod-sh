const tableNames = require('../../src/constants/tableNames')

exports.seed = async (knex) => {
  await Promise.all(Object.keys(tableNames).map((name) => knex(name).del()))

  const urls = [
    {
      slug: '123_hdqay',
      url: 'https://github.com/CodingGarden/inventory-app/blob/master/backend/src/setupTests.js',
    },
    {
      slug: 'wowg1g',
      url: 'https://github.com/CodingGarden/inventory-app/blob/master/backend/src/setupTests.js',
    },
    {
      slug: 'giL4-csnj',
      url: 'https://github.com/CodingGarden/inventory-app/blob/master/backend/src/setupTests.js',
    },
    {
      slug: '_hcsu_',
      url: 'https://github.com/CodingGarden/inventory-app/blob/master/backend/src/setupTests.js',
    },
    {
      slug: '_ut7b',
      url: 'https://github.com/CodingGarden/inventory-app/blob/master/backend/src/setupTests.js',
    },
    {
      slug: '1hcd_',
      url: 'https://github.com/CodingGarden/inventory-app/blob/master/backend/src/setupTests.js',
    },
    {
      slug: 'gi777_4',
      url: 'https://github.com/CodingGarden/inventory-app/blob/master/backend/src/setupTests.js',
    },
    {
      slug: 'cdj87ca',
      url: 'https://github.com/CodingGarden/inventory-app/blob/master/backend/src/setupTests.js',
    },
    {
      slug: 'casduy9q3rf',
      url: 'https://github.com/CodingGarden/inventory-app/blob/master/backend/src/setupTests.js',
    },
    {
      slug: 'e2139dqncfas89',
      url: 'https://github.com/CodingGarden/inventory-app/blob/master/backend/src/setupTests.js',
    },
    {
      slug: 'joy9qwdo8cdlkN',
      url: 'https://github.com/CodingGarden/inventory-app/blob/master/backend/src/setupTests.js',
    },
    {
      slug: 'ilfat_',
      url: 'https://github.com/CodingGarden/inventory-app/blob/master/backend/src/setupTests.js',
    },
    {
      slug: '_1zz4t',
      url: 'https://github.com/CodingGarden/inventory-app/blob/master/backend/src/setupTests.js',
    },
    {
      slug: '_pr47am4',
      url: 'https://github.com/CodingGarden/inventory-app/blob/master/backend/src/setupTests.js',
    },
  ]

  const createdUrls = await knex(tableNames.url).insert(urls).returning('*')
  // eslint-disable-next-line no-console
  console.log('🚀 urls seeder was successfuly created 🚀', createdUrls[0])
}
