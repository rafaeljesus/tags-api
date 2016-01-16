const koa = require('koa')
  , cors = require('kcors')
  , tagsAPI = require('./api')
  , app = koa()

app.use(cors({
  methods: ['GET']
}))
app.use(tagsAPI.routes())

module.exports = app
