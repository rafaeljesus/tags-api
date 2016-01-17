'use strict'

module.exports = wrapGen

function wrapGen(it) {
  let arr = []
  let res = it.next()

  while(!res.done) {
    arr = arr.concat(res.value)
    res = it.next()
  }

  return arr
}
