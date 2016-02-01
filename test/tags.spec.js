const chai = require('chai')

const Tags = require('../api/tags')
const expect = chai.expect

describe('TagsSpec', () => {

  describe('.find', () => {
    it('should find tags', () => {
      return Tags.find().then(res => {
        expect(res.length).to.eq(5)
      })
    })
  })

})
