const request = require('supertest')
const app = require('../app')

describe('GET request for app', () => {
  describe('GET /', () => {
    test('should return one message', async () => {
      const response = await request(app)
        .get('/')
        .expect('Content-Type', /json/)
        .expect(200)

      expect(response.body).toEqual({
        message: '🚀 welcome to kod-sh url shortner 🚀',
      })
    })
  })

  // eslint-disable-next-line spaced-comment
  //TODO: test if user access GET /:id
})
