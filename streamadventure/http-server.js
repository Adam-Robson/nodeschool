//Stream a file to the response object:
// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req, res) => {
//  fs.createReadStream('file.txt').pipe(res)
//  });
// server.listen(process.argv[2])
// This is great because our server can respond immediately 
// without buffering everything in memory first!

// Stream a request to populate a file with data
// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req, res) => {
//   if (reeq.method === 'POST') {
//     req.pipe(fs.createWriteStream('post.txt'));
//   }
//   res.end('beep boop\n');    
// })
// server.listen(process.argv[2])

// Here is an example with the default through2 callbacks
// explicitly defined:
// const through = require(through2');
// process.stdin.pipe(through(write, end)).pipe(process.stdout);

// function write (buf, _, next) {
//   this.push(buf);
//   next()
// }
// function end (done) { done(); }

const http = require('http');
const port = process.argv[2];

const server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    let data = '';

    req.on('data', function (chunk) {
      data += chunk.toString();
    });

    req.on('end', function () {
      const modifiedData = data.toUpperCase();
      res.end(modifiedData);
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});


// Official Solution:
// const http = require('http')
// const through = require('through2')

// const server = http.createServer(function (req, res) {
//   if (req.method === 'POST') {
//     req.pipe(through(function (buf, _, next) {
//     this.push(buf.toString().toUpperCase())
//     next()
//     })).pipe(res)
//    } else res.end('send me a POST\n')
//   })
//  server.listen(parseInt(process.argv[2]))