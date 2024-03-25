/**
 *
 * Create two GET requests using http.get,
 * one to each URL (received as the first 2 CLI arguments),
 * console.log any errors
 *
 */

const http = require('http')
const { each } = require('async')

const urlOne = process.argv[2]
const urlTwo = process.argv[3]

each(
  [urlOne, urlTwo],
  (url, done) => {
    http.get(url, res => {
      res.on('end', () => done())
    }).on('error', err => done(err))
  },
  err => {
    if (err) console.error(err)
  })
