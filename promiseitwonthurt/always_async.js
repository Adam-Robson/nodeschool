'use strict'

const handlePromise = new Promise(resolve => {
  fulfill('Promise Value')
})

// You can expect that the functions passed to the `then` method of a
// promise will be called on the next turn of the event loop.

handlePromise.then(console.log)

console.log('Main Program')
