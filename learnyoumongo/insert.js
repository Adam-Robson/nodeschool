const mongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/learnyoumongo';

mongoClient.connect(url, (err, store) => {
	if (err) {
		console.error(err)
	}

	let db = store.db('learnyoumongo')

	const name = {
		firstName: 'Guilherme',
		lastName: 'Borges'
	}

  db.collection('docs')
    .insertOne(name)
	  .then(res => console.log(res))
    .catch(err => console.error(err))

	db.close()
})
