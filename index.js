const koa = require('koa')
  , cors = require('kcors')
  , tagsAPI = require('./api/tags')
  , app = koa()

app.use(cors({
  methods: ['GET']
}))

module.exports = app
