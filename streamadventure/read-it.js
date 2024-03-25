const { Readable } = require('stream');
const argument = process.argv[2];

const customReadableStream = new Readable({
  read() {
    this.push(argument);
    this.push(null);
  },
});

customReadableStream.pipe(process.stdout);

// Official Solution:
//  const { Readable } = require('stream')

//     class ReadableStream extends Readable {
//       _read (size) {
//       }
//     }

//     const stream = new ReadableStream()
//     stream.push(process.argv[2])
//     stream.pipe(process.stdout)