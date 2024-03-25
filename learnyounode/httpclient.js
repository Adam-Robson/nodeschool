const http = require('node:http');

if (process.argv.length < 3) {
  console.error('Please provide a URL as a command-line argument');
  process.exit(1);
}
const url = process.argv[2];
http.get(url, (response) => {
  response.setEncoding('utf8');
  response.on('data', (chunk) => {
    console.log(chunk);
  });
  response.on('error', (error) => {
    console.error('An error occurred:', error);
  });
}).on('error', (error) => {
  console.error('Error making the request:', error);
});

// Official Solution: 
//  'use strict'
//     const http = require('http')

//     http.get(process.argv[2], function (response) {
//       response.setEncoding('utf8')
//       response.on('data', console.log)
//       response.on('error', console.error)
//     }).on('error', console.error)