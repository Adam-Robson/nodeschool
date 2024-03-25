/**
 *
 * Write a program that will receive the hostname
 * & port as two command line arguments.
 *
 * Five times, using http.request send a POST to
 * '/users/create' with a JSON.stringify'ed object
 * body: {"user_id": 1}; each time increment the
 * value by 1.
 *
 * After, send an http.get to: '/users'
 *
 */

const http = require('http')
const { times, series } = require('async')

const hostname = process.argv[2]
const port = process.argv[3]

const addUser = (user_id, cb) => {
  const postData = JSON.stringify({ user_id })

  const options = {
    hostname,
    port,
    method: 'POST',
    path: '/users/create'
  }

  const req = http.request(options, res => {
    res.on('data', (chunk) => chunk)
    res.on('end', () => cb())
  })

  req.write(postData)
  req.end()
}

const getUsers = cb => {
  const options = {
    hostname,
    port,
    method: 'GET',
    path: '/users'
  }
  http.get(options, res => {
    let body = ''
    res.on('data', chunk => body += chunk.toString())
    res.on('end', () => cb(body))
  }).on('error', err => console.error(err))
}

series({
  requestOne: times(5, (n, next) => {
    addUser(++n, next)
  }, err => {
    err && console.error(err)
  }),
  requestTwo: getUsers(users => console.log(users))
  }, (err, results) => {
  err && console.error(err)
  console.log(results)
});

