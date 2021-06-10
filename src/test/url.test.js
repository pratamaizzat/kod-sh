const request = require('supertest')
const app = require('../app')

describe('GET /api/v1/url', () => {
  describe('Not Happy Path if user give invalid request to the server', () => {
    test('should return error if user give not giving the url', async () => {
      const response = await request(app)
        .post('/api/v1/url')
        .expect(422)
        .expect('Content-Type', /json/)

      expect(response.body).toEqual(
        expect.objectContaining({
          error: expect.objectContaining({
            statusCode: 422,
            type: 'ValidationError',
            errors: expect.arrayContaining([
              expect.objectContaining({
                error: expect.any(String),
              }),
            ]),
          }),
        })
      )
    })

    test('should return error if user give invalid slug', async () => {
      const testSlugs = [
        '?thisis_invalid',
        'wow',
        123,
        101010,
        'th15 isnotValid',
        '..bnky6',
        '@csdkjh',
        '!!cw762',
        '#dquydq$',
        '^xsquy123',
        'qhu&&&qk',
        '*bqklu*',
        '(adams66)',
      ]

      await Promise.all(
        testSlugs.map(async (sl) => {
          const response = await request(app)
            .post('/api/v1/url')
            .send({
              slug: sl,
              url: 'https://github.com/CodingGarden/inventory-app/blob/master/backend/db/seeds/01_initial_beans.js',
            })
            .expect(422)
            .expect('Content-Type', /json/)

          expect(response.body).toEqual(
            expect.objectContaining({
              error: expect.objectContaining({
                statusCode: 422,
                type: 'ValidationError',
                errors: expect.arrayContaining([
                  expect.objectContaining({
                    error: expect.any(String),
                  }),
                ]),
              }),
            })
          )

          return response
        })
      )
    })

    test('should return error if user give invalid url', async () => {
      const testUrls = [
        '?thisis_invalid',
        101010,
        'https:mongoosejs.com/docs/api.html#model_Model.cleanIndexes',
        'https://github/NigelEarle/80150ff1c50031e59b872baf0e474977',
        'youtube/watch?v=FKnzS_icp20',
        'http://jestjs/docs/expect#tobeundefined',
        'http://www.example.com/grave`accent',
        'http://www.example.com/中文/北京[city]',
      ]

      await Promise.all(
        testUrls.map(async (ul) => {
          const response = await request(app)
            .post('/api/v1/url')
            .send({
              slug: 'v4l1Dslu6_',
              url: ul,
            })
            .expect(422)
            .expect('Content-Type', /json/)

          expect(response.body).toEqual(
            expect.objectContaining({
              error: expect.objectContaining({
                statusCode: 422,
                type: 'ValidationError',
                errors: expect.arrayContaining([
                  expect.objectContaining({
                    error: expect.any(String),
                  }),
                ]),
              }),
            })
          )

          return response
        })
      )
    })

    test('should return error if user given not-unique slug', async () => {
      const response = await request(app)
        .post('/api/v1/url')
        .send({
          slug: 'e2139dqncfas89',
          url: 'https://github.com/CodingGarden/inventory-app/blob/master/backend/src/constants/us_states.js',
        })
        .expect(409)
        .expect('Content-Type', /json/)

      expect(response.body).toEqual(
        expect.objectContaining({
          error: expect.objectContaining({
            statusCode: 409,
            type: 'UniqueViolationError',
            errors: expect.arrayContaining([
              expect.objectContaining({
                error: expect.any(String),
              }),
            ]),
          }),
        })
      )
    })
  })

  describe('Happy path if user given right url and slug', () => {
    test('should return object contains url if user give right url and slug', async () => {
      const body = {
        slug: 'thisis_GoodSlug',
        url: 'http://knexjs.org/#Builder-insert',
      }
      const response = await request(app)
        .post('/api/v1/url')
        .send(body)
        .expect(201)
        .expect('Content-Type', /json/)
      expect(response.body).toEqual(
        expect.objectContaining({
          data: expect.objectContaining({
            type: 'url',
            _id: expect.any(Number),
            attributes: expect.objectContaining({
              slug: body.slug.toLowerCase(),
              url: body.url,
            }),
          }),
        })
      )
    })
  })
})
