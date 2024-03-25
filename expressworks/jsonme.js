const express = require('express');
const fs = require('fs');

const app = express();
const port = process.argv[2]; // Port passed as the first command-line argument
const filename = process.argv[3];

app.get('/books', (req, res) => {
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
