'use strict'

const invalidJson = process.argv[2]

const handlePromise = json => new Promise((resolve, reject) => {
  try {
    resolve(JSON.parse(json))
  } catch (e) {
    reject(e)
  }
})

const handleReject = err => console.log(err.message)

parsePromised(invalidJson)
  .catch(handleReject)
