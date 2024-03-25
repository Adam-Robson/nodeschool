 /*
 Send an HTTP POST request to (http://localhost:8099) and pipe
  process.stdin into it. Pipe the response stream to process.stdout.

  You can use the http module in node core, specifically the request method,
  to solve this challenge.

  Here's an example to make a POST request using http.request():

     const { request } = require('http')

     const options = { method: 'POST' }
     const req = request('http://beep.boop:80/', options, (res) => {
        <do something with res>
     })
  Hint: The req object that you get back from request() is a writable stream
  and the res object in the callback function is a readable stream.
  */

const http = require('http');

const postData = []; // store the chunks from process.stdin

const options = {
  hostname: 'localhost',
  port: 8099,
  path: '/',
  method: 'POST',
};

const postRequest = http.request(options, function (response) {
  response.pipe(process.stdout); // pipe response to process.stdout
});

// handle data from process.stdin
process.stdin.on('data', function (chunk) {
  postData.push(chunk); // store the chunks
});

// handle end of input from process.stdin
process.stdin.on('end', function () {
  const postDataBuffer = Buffer.concat(postData); // concatenate stored chunks
  postRequest.write(postDataBuffer); // send POST request with data
  postRequest.end(); // end request
});

