import fs from 'fs'
import path from 'path'

const dataPath = path.join(__dirname, '../data')

export async function findFiles () {
  const files = await listDataDir()

  return await Promise.all(files.map((file) => readFile(file)))
}

function listDataDir () {
  return new Promise((resolve, reject) => {
    fs.readdir(dataPath, (err, res) => {
      if (err) return reject(err)
      resolve(res)
    })
  })
}

function readFile (file) {
  return new Promise((resolve, reject) => {
    fs.readFile(`${dataPath}/${file}`, 'utf8', (err, json) => {
      if (err) return reject(err)
      const obj = parseJSON(json, path)
      resolve(obj)
    })
  })
}

function parseJSON (json, path) {
  try {
    return JSON.parse(json)
  }
  catch (err) {
    console.error(`file ${path} ignored`)
    return {}
  }
}
