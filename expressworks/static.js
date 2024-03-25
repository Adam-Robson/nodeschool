/**
 *
 * This exercise is to serve a static file
 * with an Express application.
 *
 */

const express = require('express');
const path = require('path');

const app = express();
const portNo = process.argv[2];

// Set the path to the static file
// which is specified by the second
// argument passed to the program
// or the public dir in the current
// directory.
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

app.listen(portNo);
