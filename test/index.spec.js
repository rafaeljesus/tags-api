import test from 'ava'
import 'babel-register'
import request from 'request-promise'

import listen from './listen'

test('GET /', async (t) => {
  const url = await listen()
  const body = await request({
    uri: url,
    method: 'GET',
    json: true
  })
  t.true(body.length === 5)
  t.is(body[0].name, 'ipsum')
  t.is(body[0].total, 3)
  t.is(body[1].name, 'amet')
  t.is(body[1].total, 2)
  t.is(body[2].name, 'dolor')
  t.is(body[2].total, 2)
  t.is(body[3].name, 'sit')
  t.is(body[3].total, 0)
  t.is(body[4].name, 'lorem')
  t.is(body[4].total, 0)
})
