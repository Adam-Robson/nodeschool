const mongoClient = require('mongodb').MongoClient

const url = `mongodb://localhost:27017/learnyoumongo`

mongoClient.connect(url, (err, store) => {
  if (err) {
    console.error(err)
  }

	const db = store.db(process.argv[2])

	db
	  .collection('users')
	  .updateOne({ username: 'sherri' }, { $set: { age: 22 } })
	  .then(data => {
		  console.log(data)
	  }).catch(err => console.error(err))
	db.close()
})
