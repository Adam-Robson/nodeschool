const process = require('process');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.argv[2];

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/search', (req, res) => {
  const queryParams = req.query;
  res.json(queryParams);
});

app.listen(port);

// Official Solution:
//  const express = require('express')
//     const app = express()

//     app.get('/search', function(req, res){
//       const query = req.query
//       res.send(query)
//     })

//     app.listen(process.argv[2])
