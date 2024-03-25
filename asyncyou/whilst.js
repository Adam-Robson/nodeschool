/**
 *
 * Write a program that takes a CLI argument that is a
 * URL & use async.whilst to send http.get requests to it
 * until the response body includes "meerkat".
 *
 * console.log the amount of requests needed to do so
 *
 */

const http = require('http')
const { whilst } = require('async')

const url = process.argv[2]

let resp = ''
let count = 0

whilst(
  () => resp.trim() !== 'meerkat',
  (cb) => {
    let body = ''
    http.get(url, res => {
      res.on('data', chunk => body += chunk.toString())
      res.on('end', () => {
        ++count
        resp = body
        cb(null, count)
      })
    })
  },
  err => {
    err && console.error(err)
    console.log(count)
  }
)
