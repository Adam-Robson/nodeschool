/**
 * 
 * Here we will learn how to search for documents.
 * 
 * In this exercise the database name is learnyoumongo.
 * So, the url would be something like: mongodb://localhost:27017/learnyoumongo
 */

const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/learnyoumongo'

mongoClient.connect(url, (err, store) => {
	let db = store.db('learnyoumongo')

	if (err) {
		console.error('Error connecting to the database.')
	}

	db.collection('parrots')
	.find({ age: { $gt: process.argv[2] } })
	.toArray((err, documents) => {
		if (err) {
			console.log('Error reading the document.')
		}
		console.error(documents)
		db.close()
	})
})
