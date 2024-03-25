'use strict'

const setTitle = str => `Dr. ${str}`

Promise.resolve('Rotunda')
  .then(setTitle)
  .then(console.log)
