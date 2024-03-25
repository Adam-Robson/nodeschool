const net = require('net')
const { log } = require('console')

function zeroFill(number) {
  return (number < 10 ? '0' : '') + number;
}

const server = net.createServer((socket) => {
  socket.end(newDate);
});

const date = new Date();
let year = date.getFullYear();
let month = zeroFill(date.getMonth() + 1);
let day = zeroFill(date.getDate()); // Use getDate() instead of getDay() to get the day of the month
let hours = zeroFill(date.getHours());
let minutes = zeroFill(date.getMinutes());
const newDate = `${year}-${month}-${day} ${hours}:${minutes}\n`;

server.listen(process.argv[2], () => {
  log(newDate);
});


 //Official Solution:
//  'use strict'
//     const net = require('net')

//     function zeroFill (i) {
//       return (i < 10 ? '0' : '') + i
//     }

//     function now () {
//       const d = new Date()
//       return d.getFullYear() + '-' +
//         zeroFill(d.getMonth() + 1) + '-' +
//         zeroFill(d.getDate()) + ' ' +
//         zeroFill(d.getHours()) + ':' +
//         zeroFill(d.getMinutes())
//     }

//     const server = net.createServer(function (socket) {
//       socket.end(now() + '\n')
//     })

//     server.listen(Number(process.argv[2]))