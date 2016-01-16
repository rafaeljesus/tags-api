const fs = require('fs')
  , path = require('path')
  , log = require('../lib/log')
  , dataPath = path.join(__dirname, '../data')

module.exports = transform

function *transform(tags) {
  return listDataDir().
    then(findJSONFile).
    then(transform)
}

function listDataDir() {
  return new Promise((resolve, reject) => {
    fs.readdir(dataPath, (err, res) => {
      if (err) return reject(err)
      resolve(res)
    })
  })
}

function findJSONFile(files) {
  return Promise.all(files.map(file => {
    return new Promise((resolve, reject) => {
      fs.readFile(`${dataPath}/${file}`, 'utf8', (err, json) => {
        if (err) return reject(err)
        const obj = parseJSON(json)
        resolve(obj)
      })
    })
  }))
}

function parseJSON(json) {
  try {
    return JSON.parse(json)
  } catch (err) {}
}
