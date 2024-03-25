const concat = require('concat-stream');

process.stdin.pipe(concat((body) => {
  const reversedText = body.toString().split('').reverse().join('');
  process.stdout.write(reversedText);
}));
