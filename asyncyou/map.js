/**
 *
 * Use http.get & create two requests to the
 * two URLs, received as CLI arguments.
 *
 * Use async.map; console.log the results.
 *
 */

const http = require('http')
const { map } = require('async')

const urlOne = process.argv[2]
const urlTwo = process.argv[3]

map(
  [urlOne, urlTwo],
  (url, done) => {
    let body = ''
    http.get(url, res => {
      res.on('data', chunk => body += chunk.toString())
      res.on('end', () => done(null, body))
    }).on('error', err => done(err))
  },
  (err, results) => {
    if (err) console.error(err)
    console.log(results)
  }
)
