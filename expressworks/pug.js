const express = require('express');
const app = express();

const port = process.argv[2];
const pathToPug = process.argv[3];

app.set('view engine', 'pug');
app.set('views', pathToPug);
app.get('/home', (req, res) => {
  res.render('index', { date: new Date().toDateString() })
});

app.listen(port, () => {
  console.log('express is on ' + port);
});

// Official Solution:
// const express = require('express')
    // const app = express()
    // app.set('view engine', 'pug')
    // app.set('views', process.argv[3])
    // app.get('/home', function(req, res) {
    //   res.render('index', {date: new Date().toDateString()})
    // })
    // app.listen(process.argv[2])
