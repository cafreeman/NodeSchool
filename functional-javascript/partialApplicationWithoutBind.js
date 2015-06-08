var slice = Array.prototype.slice;

function logger(namespace) {
  return function() {
    var args = slice.call(arguments, 0); //Array of arguments
    args.unshift(namespace);
    // console.log(args instanceof Array);
    console.log.apply(null, args);
  };
}

module.exports = logger;

// function logger(namespace) {
//   return function() {
//     console.log.apply(console, [namespace].concat(slice.call(arguments)))
//   }
// }