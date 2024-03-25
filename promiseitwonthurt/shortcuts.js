'use strict'

const promise = Promise.reject(new Error('secret'))

const handleReject = err => console.error(err.message)

promise.catch(handleReject)
