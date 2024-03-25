const http = require('node:http');

// collect the content from a URL
function collectUrlContent(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (response) => {
      let content = '';
      response.setEncoding('utf8');
      response.on('data', (data) => {
        content += data;
      });
      response.on('end', () => {
        resolve(content);
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

const urls = process.argv.slice(2);

const promises = urls.map(collectUrlContent);

// Resolve all promises; print content in order
Promise.all(promises)
  .then((contents) => {
    contents.forEach((content) => {
      console.log(content);
    });
  })
  .catch((error) => {
    console.error(`Request Error: ${error}`);
  });

  // Official Solution:

    // 'use strict'
    // const http = require('http')
    // const bl = require('bl')
    // const results = []
    // let count = 0

    // function printResults () {
    //   for (let i = 0; i < 3; i++) {
    //     console.log(results[i])
    //   }
    // }

    // function httpGet (index) {
    //   http.get(process.argv[2 + index], function (response) {
    //     response.pipe(bl(function (err, data) {
    //       if (err) {
    //         return console.error(err)
    //       }

    //       results[index] = data.toString()
    //       count++

    //       if (count === 3) {
    //         printResults()
    //       }
    //     }))
    //   })
    // }

    // for (let i = 0; i < 3; i++) {
    //   httpGet(i)
    // }
