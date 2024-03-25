'use strict'

const util = require('util')
const timeoutPromise = util.promisify(setTimeout)

timeoutPromise(300, 'Request timed out!')
  .then(value => console.log(value))
