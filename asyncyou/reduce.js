/**
 *
 * Write a program that will receive a URL as the first
 * command line argument & for each of the values in the
 * following array, send an http.get with a query parameter
 * named number set at the proper value:
 * ['one', 'two', 'three']
 *
 * Each time, convert the response body to Number and add
 * it to the previous value.
 *
 */

const http = require('http')
const { reduce } = require('async')

const getUrl = process.argv[2]

reduce(['one', 'two', 'three'], 0, (memo, num, cb) => {
  http.get(`${getUrl}?number=${num}`, res => {
    res.on('data', chunk => memo += Number(chunk))
    res.on('end', () => cb(null, memo))
  }).on('error', err => console.error(err))

}, (err, res) => {
  if (err) console.error(err)
  console.log(res)
})
