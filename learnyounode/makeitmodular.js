// My desired solution:
'use strict'

const myModule = require('./my-module.js')
const dir = process.argv[2]
const ext = process.argv[3]
myModule(dir, ext, (err, list) => {
  if (err) return console.error('There was an error:', err);
  list.forEach((file) => console.log(file));
});

// Official Solution:
// 'use strict'
// const filterFn = require('./solution_filter.js')
// const dir = process.argv[2]
// const filterStr = process.argv[3]
// filterFn(dir, filterStr, function (err, list) {
//   if (err) {
//     return console.error('There was an error:', err)
//   }
//   list.forEach(function (file) {
//     console.log(file)
//   })
// })

// My Actual Solution:
// const myModule = require('./my-module');
// const dir = process.argv[2];
// const ext = process.argv[3];
// function myCallback(err, data) {
//   if (err) console.error(err);
//   return data;
// }
// myModule(dir, ext, myCallback);







