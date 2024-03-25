'use strict';

const http = require('node:http');
const fs = require('fs');

const port = process.argv[2];
const filePath = process.argv[3];

const server1 = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(filePath).pipe(res);
});

const server2 = http.createServer((req, res) => {
  const readStream = fs.createReadStream(filePath);
  
  readStream.pipe(res);
});

server.listen(port, () => {
  console.log(`HTTP server is listening on port ${port}`);
});

  // Official Solution:

  // 'use strict'
  // const http = require('http')
  // const fs = require('fs')

  // const server = http.createServer(function (req, res) {
  //   res.writeHead(200, { 'content-type': 'text/plain' })

  //   fs.createReadStream(process.argv[3]).pipe(res)
  // })

  // server.listen(Number(process.argv[2]))
