//   print a list of files in a given directory
//   filtered by the extension of the files 
//   a directory name is given as the first argument
//   a file extension to filter by is given as the second argument
//   the second argument will not come prefixed with a '.'
//   print the list of files to the console, one file per line

const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
const ext = '.' + process.argv[3]

fs.readdir(dir, 'utf8', (err, list) => {
  if (err) console.error(err);
  
  list.filter((file) => {
    if (path.extname(file) === ext) {
      console.log(file);
    };
  });
});

// OFficial Solution:

    // 'use strict'
    // const fs = require('fs')
    // const path = require('path')

    // const folder = process.argv[2]
    // const ext = '.' + process.argv[3]

    // fs.readdir(folder, function (err, files) {
    //   if (err) return console.error(err)
    //   files.forEach(function (file) {
    //     if (path.extname(file) === ext) {
    //       console.log(file)
    //     }
    //   })
    // })