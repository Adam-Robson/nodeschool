const http = require('node:http');
const url = require('node:url');

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  if (pathname === '/api/parsetime' && query && query.iso) {
    const iso = new Date(query.iso);
    const response = {
      hour: iso.getHours(),
      minute: iso.getMinutes(),
      second: iso.getSeconds()
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  } else if (pathname === '/api/unixtime' && query && query.iso) {
    const unix = new Date(query.iso).getTime();
    const response = {
      unixtime: unix
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  } else {
    res.writeHead(404);
    res.end();
  }
});

const port = process.argv[2];
server.listen(port, () => {
  console.log(`HTTP server is listening on port ${port}`);
});


// Official Solution:

// 'use strict'
//     const http = require('http')

//     function parsetime (time) {
//       return {
//         hour: time.getHours(),
//         minute: time.getMinutes(),
//         second: time.getSeconds()
//       }
//     }

//     function unixtime (time) {
//       return { unixtime: time.getTime() }
//     }

//     const server = http.createServer(function (req, res) {
//       const parsedUrl = new URL(req.url, 'http://example.com')
//       const time = new Date(parsedUrl.searchParams.get('iso'))
//       let result

//       if (/^\/api\/parsetime/.test(req.url)) {
//         result = parsetime(time)
//       } else if (/^\/api\/unixtime/.test(req.url)) {
//         result = unixtime(time)
//       }

//       if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(result))
//       } else {
//         res.writeHead(404)
//         res.end()
//       }
//     })
//     server.listen(Number(process.argv[2]))

