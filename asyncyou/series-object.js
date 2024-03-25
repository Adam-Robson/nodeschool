/**
 *
 * Write a script using async.series to run the first
 * two command line arguments in series.
 *
 * Create an http.get to the URLs & pass the response
 * to the callback; console.log the results.
 *
 */

const { series } = require('async')
const http = require('http')

const urlOne = process.argv[2]
const urlTwo = process.argv[3]

const resBody = (url, cb) => {
  let body = ''
  http.get(url, res => {
    res.on('data', chunk => body += chunk.toString())
    res.on('end', () => cb(null, body))
  }).on('error', err => cb(err))
}

series({
  requestOne: cb => resBody(urlOne, cb),
  requestTwo: cb => resBody(urlTwo, cb),
}, (err, results) => {
  err && console.error(err)
  console.log(results)
});
