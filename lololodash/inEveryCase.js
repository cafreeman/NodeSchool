// * All cities having a population over 1 million are "big".
// * Cities having a population less than 1 million but more than 0.5 million are "med".
// * All cities having a population less than 0.5 million are "small".

// include the Lo-Dash library
var _ = require("lodash");

var worker = function(obj) {
  return _.forEach(obj, function(item) {
    if (item.population > 1) {
      item.size = "big";
    } else if (item.population <= 1 && item.population > 0.5) {
      item.size = "med";
    } else {
      item.size = "small";
    }
    return item;
  });
};

// export the worker function as a nodejs module
module.exports = worker;
