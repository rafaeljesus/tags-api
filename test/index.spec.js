const supertest = require('supertest')
  , chai = require('chai')
  , app = require('../')
  , request = supertest(app.listen())
  , expect = chai.expect

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
