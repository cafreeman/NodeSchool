// include the Lo-Dash library
var _ = require("lodash");

var worker = function(obj) {
  var avg = _.reduce(obj, function(acc, elem) {
    return acc + elem.income;
  }, 0)/_.size(obj);

  var underperform = _.filter(obj, function(item) {
    return item.income <= avg;
  });

  var overperform = _.filter(obj, function(item) {
    return item.income > avg;
  });

  return {
    "average": avg,
    "underperform": _.sortBy(underperform, 'income'),
    "overperform": _.sortBy(overperform, 'income')
  };
};

// export the worker function as a nodejs module
module.exports = worker;
