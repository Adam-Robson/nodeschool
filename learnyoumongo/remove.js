const mongoClient = require('mongodb').MongoClient

const store = process.argv[2]
const collection = process.argv[3]
const id =  process.argv[4]

const url = `mongodb://localhost:27017/${store}`


mongoClient.connect(url, (err, db) => {
	if (err) {
		console.error(err)
	}

	const database = db.db(store)

  database.collection(collection)
    .deleteOne({ _id: id })
	  .then(data => {
		  console.log(`${data} deleted.`)
	  })
	  .catch((err) => {
		console.error('Error: ', err)
	})
	db.close()
})
