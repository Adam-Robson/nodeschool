'use strict'

/* global getPromise1, getPromise2 */

const allPromises = (...promises) =>
  new Promise(resolve => {
    let count = 0
    let res = []

    const handleResolve = (value, index) => {
      res[index] = value
      count++

      if (count === 2) {
        resolve(res)
      }
    }

    promises.map((promise, index) => {
      promise.then(value => handleResolve(value, index))
    })
  })

allPromises(getPromise1(), getPromise2())
  .then(console.log)
