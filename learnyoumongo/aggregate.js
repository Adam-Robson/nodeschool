/**
 * 
 * Generate the average price, to two decimals,
 * for the items that meet the criteria.
 * 
 */

const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/learnyoumongo'

mongoClient.connect(url, (err, DB) => {
	const db = DB.db('learnyoumongo')

  db.collection('prices')
			.aggregate([
				{ $match: { size: process.argv[2] } },
				{ $group: {
					_id: 'average',
					total: { $avg: '$price' } 
				} }
			]).toArray((err, results) => {
				err && console.log(err)
				if (!results.length) {
          console.error('No results found')
        }
        const { total } = results[0]
        const numTotal = Number(total).toFixed(2)
				console.log(numTotal)
			});
	DB.close()
})
