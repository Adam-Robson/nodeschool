function printSumOfArgV(a, b) {
  let total = 0;
  for (let i = 2; i < process.argv.length; i++) {
    total += Number(process.argv[i]);
  }
  return total;
}
console.log(printSumOfArgV());

// Official solution:
// var result = 0
// for (var i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i])
// }
// console.log(result);
