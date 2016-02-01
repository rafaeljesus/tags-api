const fs = require('fs')
const path = require('path')
const tagsfile = path.join(__dirname, '../tags.txt')

exports.find = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(tagsfile, 'utf8', (err, res) => {
      if (err) return reject(err)
      const arr = res.trim().split('\n')
      resolve(arr)
    })
  })
}
