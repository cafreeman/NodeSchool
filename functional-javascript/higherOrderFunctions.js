
function repeat(operation, num) {
  for (var i = 0; i < num.length; i++) {
    operation();
  }
}

module.exports = repeat;

//Official solution

// function repeat(operation, num) {
//   if (num <= 0) return
//   operation()
//   return repeat(operation, --num)
// }
