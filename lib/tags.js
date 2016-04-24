import fs from 'fs'
import path from 'path'

const tagsfile = path.join(__dirname, '../tags.txt')

export function findTags () {
  return new Promise((resolve, reject) => {
    fs.readFile(tagsfile, 'utf8', (err, res) => {
      if (err) return reject(err)
      const arr = res.trim().split('\n')
      resolve(arr)
    })
  })
}
