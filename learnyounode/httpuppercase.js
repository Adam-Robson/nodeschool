const http = require('http');
const through2 = require('through2');
const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    const newStream = through2((chunk, _encoding, callback) => {
      const upper = chunk.toString().toUpperCase();
      newStream.push(upper);
      callback();
    });

    req.pipe(newStream).pipe(res);
  } else {
    res.statusCode = 400;
    res.end('Bad Request: Only POST requests are supported.');
  }
});

server.listen(port, () => {
  console.log(`HTTP server is listening on port ${port}`);
});

// Official Solution:
//  'use strict'
//     const http = require('http')
//     const map = require('through2-map')

//     const server = http.createServer(function (req, res) {
//       if (req.method !== 'POST') {
//         return res.end('send me a POST\n')
//       }

//       req.pipe(map(function (chunk) {
//         return chunk.toString().toUpperCase()
//       })).pipe(res)
//     })

//     server.listen(Number(process.argv[2]))