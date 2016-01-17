const krouter = require('koa-router')
  , Tags = require('./tags')
  , JSONFiles = require('./json.files')
  , transform = require('./transform')
  , router = krouter()

module.exports = router

router.
  get('/v1/tags', function *() {
    try {
      const res = yield [
        Tags.find(),
        JSONFiles.find()
      ]
      this.body = yield transform(res[0], res[1])
    } catch (err) {
      this.throw(412, err)
    }
  })
