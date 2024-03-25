'use strict'

const handlePromise = new Promise(resolve => {
  setTimeout(() => resolve('Resolved!'), 300)
})

handlePromise.then(console.log)
