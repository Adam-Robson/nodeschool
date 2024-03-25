const express = require('express');
const stylus = require('stylus');

const app = express();

const port = process.argv[2];

app.use(stylus.middleware(process.argv[3]));
app.use(express.static(process.argv[3]));

app.listen(port);

// Official Solution:
//  const express = require('express')
//     const app = express()

//     app.use(require('stylus').middleware(process.argv[3]));
//     app.use(express.static(process.argv[3]));


//     app.listen(process.argv[2])
