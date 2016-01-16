const chai = require('chai')
  , Tags = require('../api/tags')
  , expect = chai.expect

describe('TagsSpec', () => {

  describe('.find', () => {
    it('should find tags', () => {
      return Tags.find().then(res => {
        expect(res.length).to.eq(5)
      })
    })
  })

})
