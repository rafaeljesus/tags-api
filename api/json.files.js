const fs = require('fs')
const dataPath = require('path').join(__dirname, '../data')

exports.find = () => {
  return listDataDir().then(files => {
    return Promise.all(files.map(file => {
      return new Promise((resolve, reject) => {
        const path = `${dataPath}/${file}`
        fs.readFile(path, 'utf8', (err, json) => {
          if (err) return reject(err)
          const obj = parseJSON(json, path)
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

function parseJSON(json, path) {
  try {
    return JSON.parse(json)
  } catch (err) {
    console.error(`file ${path} ignored`)
    return {}
  }
}
