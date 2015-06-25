// include the Lo-Dash library
  var _ = require("lodash");

  var worker = function(obj) {
    return _.sortByOrder(obj, 'quantity', false);
  };

  // export the worker function as a nodejs module
  module.exports = worker;

// official solution:
// var _ = requre("lodash");
//
// var worker = function(obj) {
//   return _.sortBy(obj, function(item) {
//     return -item.quantity;
//   });
// }
