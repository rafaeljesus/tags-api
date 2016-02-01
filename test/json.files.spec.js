const chai = require('chai')

const JSONFiles = require('../api/json.files')
const expect = chai.expect

describe('JSONFilesSpec', () => {

  describe('.find', () => {
    it('should find jsonfiles', () => {
      return JSONFiles.find().then(res => {
        expect(res.length).to.eq(4)
      })
    })
  })

})
