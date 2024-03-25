// My desired solution:
'use strict'
const fs = require('fs')
const path = require('path')

module.exports = function myModule(dir, ext, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) return callback(err);
    list = list.filter((file) => path.extname(file) === '.' + ext);
  });
  callback(null, list)
}

// Official Solution:
// 'use strict'
//   const fs = require('fs')
//   const path = require('path')
//   module.exports = function (dir, filterStr, callback) {
//     fs.readdir(dir, function (err, list) {
//       if (err) {
//         return callback(err)
//       }
//       list = list.filter(function (file) {
//         return path.extname(file) === '.' + filterStr
//       })
//       callback(null, list)
//     })
//   }

// My Actual Solution:
// 'use strict'
// const fs = require('fs');
// const path = require('path');
// My Eventual Solution:
// function myModule(dir, ext, callback) {
//   fs.readdir(dir, 'utf8', (err, list) => {
//     if (err) return callback(err);
//     let res = [];
//     list.filter((file) => {
//       if (path.extname(file) === '.' + ext) {
//         console.log(file);
//         res.push(file);
//       }
//     })
//     return callback(null, res)
//   })
// }
// module.exports = myModule;