'use strict'

const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('rejected')), 300)
})

const handleReject = err => console.log(err.message)

newPromise.then(null, handleReject)
