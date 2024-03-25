/**
 *
 * Write a program that reads the contents of a file
 * containing a single URL & create an http.get request
 * to the URL; console.log the response body.
 *
 */

const http = require('http')
const fs = require('fs')
const { waterfall } = require('async')

const urlFile = process.argv[2]

const readUrlFile = (cb) => {
  fs.readFile(urlFile, 'utf-8', cb)
}

const httpRequest = (url, cb) => {
  let body = ''
  http.get(url, res => {
    res.on('data', chunk => body += chunk.toString())
    res.on('end', () => cb(null, body))
  }).on('error', err => {
    cb(err)
  })
}

waterfall([
  readUrlFile,
  httpRequest
], (err, result) => {
  if (err) return console.error(err)
  console.log(result)
})
