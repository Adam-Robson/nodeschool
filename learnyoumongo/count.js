/**
 * 
 * Use the learnyoumongo database to
 * count all documents where age is
 * greater than the first argument
 * passed to your script & console.log
 * the number to stdout.
 * 
 */

const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/learnyounode'

mongoClient.connect(url, (err, DB) => {
  err && console.error(err)
  
	const db = DB.db('learnyoumongo')

	db.collection('parrots')
    .count({ age: { $gt: process.argv[2] } },
    (err, count) => {
      err && console.error(err)
      console.log(count)
      DB.close()
    })
})
