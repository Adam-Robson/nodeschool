'use strict';
 const http = require('node:http');
if (process.argv.length < 3) {
  console.error('Provide URL as command-line argument');
  process.exit(1);
}
const url = process.argv[2];
http.get(url, (response) => {
  response.setEncoding('utf8');
  let responseData = '';
  response.on('data', (chunk) => {
    responseData += chunk;
  });
  response.on('error', (error) => {
    console.error('An error occurred:', error);
  });
  response.on('end', () => {
    console.log(responseData.length);
    console.log(responseData);
  });
}).on('error', (error) => {
  console.error(`Request Error: ${error}`);
});
