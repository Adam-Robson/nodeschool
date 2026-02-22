const express = require('express');
const fs = require('fs');
const rateLimit = require('express-rate-limit');

const app = express();
const port = process.argv[2]; // Port passed as the first command-line argument
const filename = process.argv[3];

const booksLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs on /books
});

app.get('/books', booksLimiter, (req, res) => {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Error reading the file' });
    } else {
      try {
        const parsedData = JSON.parse(data);
        res.json(parsedData);
      } catch (error) {
        res.status(500).json({ error: 'Error parsing JSON data' });
      }
    }
  });
});

app.listen(port);

// Official Solution:
//   const express = require('express')
//     const app = express()
//     const fs = require('fs')

//     app.get('/books', function(req, res){
//       const filename = process.argv[3]
//       fs.readFile(filename, function(e, data) {
//         if (e) return res.sendStatus(500)
//         try {
//           books = JSON.parse(data)
//         } catch (e) {
//           res.sendStatus(500)
//         }
//         res.json(books)
//       })
//     })

//     app.listen(process.argv[2])
