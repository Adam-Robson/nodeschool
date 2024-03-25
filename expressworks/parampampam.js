const process = require('process');
const express = require('express');
const app = express();

const port = process.argv[2];

app.put('/message/:id', (req, res) => {
  const id = req.params.id;
  const val = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex');

  res.send(val)
});

app.listen(port);

// Official Solution:
// const express = require('express')
//     const app = express()

//     app.put('/message/:id', function(req, res){
//       const id = req.params.id
//       const str = require('crypto')
//         .createHash('sha1')
//         .update(new Date().toDateString() + id)
//         .digest('hex')
//       res.send(str)
//     })

//     app.listen(process.argv[2])
