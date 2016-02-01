'use strict'

const traverseJSON = require('../lib/traverseJSON')
const wrapGen = require('../lib/wrap.gen')
const valMap = {}
const tagMap = {}

module.exports = transform

function transform(tags, jsonfiles) {
  const values = wrapGen(traverseJSON(jsonfiles))

  values.forEach(val => {
    valMap[val] = valMap[val] ? valMap[val] + 1 : 1
  })

  tags.forEach(tag => {
    tagMap[tag] = valMap[tag] ? valMap[tag] : 0
  })

  return Object.
    keys(tagMap).
    sort((a, b) => tagMap[a] - tagMap[b]).
    reverse().
    map(key => ({name: key, total: tagMap[key]}))
}
