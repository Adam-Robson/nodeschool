const fs = require('node:fs');
const { stdout } = require('node:process');

fs.createReadStream(process.argv[2]).pipe(stdout);
