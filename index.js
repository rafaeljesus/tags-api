import { findTags } from './lib/tags'
import { findFiles } from './lib/files'
import { wrapReply } from './lib/wrapper'
import transform from './lib/transform'

export default wrapReply(async () => {
  const [ tags, files ] = await Promise.all([
    findTags(),
    findFiles()
  ])
  return transform(tags, files)
})
