function duckCount() {
  var args = Array.prototype.slice.call(arguments, 0); //Array of arguments (could be any type of object)
  return args.filter(function(arg) {
    return Object.prototype.hasOwnProperty.call(arg, 'quack');
  }).length;
}

module.exports = duckCount;
