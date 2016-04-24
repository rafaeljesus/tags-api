import test from 'ava'
import 'babel-register'

import { findTags } from '../lib/tags'

test('TagsSpec', async (t) => {
  const tags = await findTags()
  t.true(tags.length === 5)
})
