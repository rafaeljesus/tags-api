const krouter = require('koa-router')

const Tags = require('./tags')
const JSONFiles = require('./json.files')
const transform = require('./transform')
const router = krouter()

module.exports = router

router.
  get('/v1/tags', function *() {
    try {
      const res = yield {
        tags: Tags.find(),
        jsonFiles: JSONFiles.find()
      }
      this.body = yield transform(res.tags, res.jsonFiles)
    } catch (err) {
      this.throw(412, err)
    }
  })
