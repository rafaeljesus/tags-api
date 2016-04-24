export default function * traverseJSON (json) {
  for (let i = 0; i < json.length; i++) {
    const val = json[i]
    if (val.tags) yield val.tags
    if (val.children) yield *traverseJSON(val.children)
  }
}
