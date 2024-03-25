'use strict'

const promise = new Promise((resolve, reject) => {
  resolve('Fired')
  reject(new Error('No Fire'))
})

const handleReject = err => console.log(err.message)

promise.then(console.log, handleReject)
