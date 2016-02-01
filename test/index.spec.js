const supertest = require('supertest')
const chai = require('chai')

const app = require('../')
const request = supertest(app.listen())
const expect = chai.expect

describe('TagsRoutesSpec', () => {

  describe('GET /v1/tags', () => {
    it('should find tags', done => {
      request.
        get('/v1/tags').
        expect('Content-Type', /json/).
        expect(200, done)
    })
  })

})
