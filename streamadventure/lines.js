const { Writable } = require('stream');

let lineCounter = 1; 
const writableStream = new Writable({
  write(chunk, encoding, callback) {
    let modifiedChunk;
    if (lineCounter % 2 === 0) {
      modifiedChunk = chunk.toString().toUpperCase();
    } else {
      modifiedChunk = chunk.toString().toLowerCase();
    }

    process.stdout.write(modifiedChunk);
    // process.stdout.write('\n');
    lineCounter++;
    callback(); 
  },
});

process.stdin.pipe(writableStream);


//Official Solution:
// const through = require('through2')
//     const split2 = require('split2')

//     let lineCount = 0
//     const tr = through(function (buf, _, next) {
//       const line = buf.toString()
//       this.push(lineCount % 2 === 0
/*      ? line.toLowerCase() + '\n'
         : line.toUpperCase() + '\n'
       )
       lineCount++
       next()
     })
     process.stdin
       .pipe(split2())
       .pipe(tr)
       .pipe(process.stdout)
 */ 
