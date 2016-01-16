const chai = require('chai')
  , JSONFiles = require('../api/json.files')
  , expect = chai.expect

describe('JSONFilesSpec', () => {

  describe('.find', () => {
    it('should find jsonfiles', () => {
      return JSONFiles.find().then(res => {
        expect(res.length).to.eq(4)
      })
    })
  })

})
