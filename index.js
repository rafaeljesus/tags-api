const koa = require('koa')
const cors = require('kcors')
const logger = require('koa-logger')

const tagsAPI = require('./api')
const app = koa()

app.use(logger())
app.use(cors({
  methods: ['GET']
}))
app.use(tagsAPI.routes())

module.exports = app
