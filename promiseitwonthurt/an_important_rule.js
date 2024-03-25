'use strict'

const alwaysThrow = () => {
  throw new Error('Oh No!')
}

const iterate = int => {
  console.log(int)
  return int + 1
}

const onReject = err => console.log(err.message)

Promise.resolve(iterate(1))
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrow)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch(onReject)
