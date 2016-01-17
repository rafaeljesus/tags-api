const koa = require('koa')
  , cors = require('kcors')
  , logger = require('koa-logger')
  , tagsAPI = require('./api')
  , app = koa()

app.use(logger())
app.use(cors({
  methods: ['GET']
}))
app.use(tagsAPI.routes())

module.exports = app
