const krouter = require('koa-router')
  , Tags = require('./tags')
  , transform = require('./transform')
  , router = krouter()

module.exports = router

router.get('/v1/tags', function *() {
  this.body = yield Tags.find().
    then(tags => yield transform(tags)).
    catch(err => this.throw(412, err))
})
