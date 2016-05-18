import { send, sendError } from 'micro'

export function wrapGen (it) {
  let arr = []
  let res = it.next()

  while (!res.done) {
    arr = arr.concat(res.value)
    res = it.next()
  }

  return arr
}

export function wrapReply (fn, ...args) {
  return async (req, res) => {
    try {
      switch (req.url) {
        case '/v1':
          const body = await fn.apply(this, args)
          send(res, 200, body)
        default:
          send(res, 405, 'Invalid method')
      }
    }
    catch (err) {
      sendError(req, res, err)
    }
  }
}
