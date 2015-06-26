var args = process.argv.slice(2);

var sum = args.reduce(function(acc, elem) {
  return acc + parseInt(elem);
}, 0);

console.log(sum);
