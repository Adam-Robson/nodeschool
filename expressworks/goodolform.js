const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const escape = require('escape-html');

const app = express();

const port = process.argv[2];

app.use(bodyParser.urlencoded({ extend: false }));

app.post('/form', (req, res) => {
  const inputString = req.body.str;
  const returnString = inputString.split('').reverse().join('');
  res.send(escape(returnString));
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
});

// Official Solution:
// const express = require('express')
//     const bodyParser = require('body-parser')
//     const app = express()

//     app.use(bodyParser.urlencoded({extended: false}))

//     app.post('/form', function(req, res) {
//       res.send(req.body.str.split('').reverse().join(''))
//     })

//     app.listen(process.argv[2])
