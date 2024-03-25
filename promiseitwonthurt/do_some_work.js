'use strict'

const qhttp = require('q-io/http')

const getUserId = id => qhttp.read(`http://localhost:7001/${id}`)

const logJson = json => console.log(JSON.parse(json))

qhttp.read('http://localhost:7000')
  .then(getUserId)
  .then(logJson)
  .catch(console.error)
