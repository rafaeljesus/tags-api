import test from 'ava'

import { findFiles } from '../lib/files'

test('FilesSpec', async (t) => {
  const files = await findFiles()
  t.true(files.length === 4)
})
