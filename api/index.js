const krouter = require('koa-router')
  , Tags = require('./tags')
  , transform = require('./transform')
  , router = krouter()

module.exports = router

router.
  get('/v1/tags', function *() {
    try {
      const tags = yield Tags.find()
      this.body = yield transform(tags)
    } catch (err) {
      this.throw(412, err)
    }
  })
