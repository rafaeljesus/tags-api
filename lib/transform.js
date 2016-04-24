import traverseJSON from './traverseJSON'
import { wrapGen } from './wrapper'

const valMap = {}
const tagMap = {}

export default function (tags, jsonfiles) {
  const values = wrapGen(traverseJSON(jsonfiles))

  values.map(val => {
    valMap[val] = valMap[val] ? valMap[val] + 1 : 1
  })

  tags.map(tag => {
    tagMap[tag] = valMap[tag] ? valMap[tag] : 0
  })

  return Object.keys(tagMap)
  .sort((a, b) => tagMap[a] - tagMap[b])
  .reverse()
  .map(key => ({ name: key, total: tagMap[key] }))
}
