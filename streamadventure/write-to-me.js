const process = require('node:process');
const { Writable } = require('node:stream');

const streamToWrite = new Writable({
   write(chunk, encoding, callback) {
    const mod = `writing: ${chunk.toString()}`;
    process.stdout.write(`${mod}\n`);
    callback();
  }
});

process.stdin.pipe(streamToWrite);

