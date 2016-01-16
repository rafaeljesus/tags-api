const fs = require('fs')
  , path = require('path')
  , dataPath = path.join(__dirname, '../data')

exports.find = () => {
  return listDataDir().then(files => {
    return Promise.all(files.map(file => {
      return new Promise((resolve, reject) => {
        fs.readFile(`${dataPath}/${file}`, 'utf8', (err, json) => {
          if (err) return reject(err)
          const obj = parseJSON(json)
          resolve(obj)
        })
      })
    }))
  })
}

function listDataDir() {
  return new Promise((resolve, reject) => {
    fs.readdir(dataPath, (err, res) => {
      if (err) return reject(err)
      resolve(res)
    })
  })
}

function parseJSON(json) {
  try {
    return JSON.parse(json)
  } catch (err) {}
}
