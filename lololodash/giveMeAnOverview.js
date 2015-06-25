// include the Lo-Dash library
var _ = require("lodash");

var worker = function(obj) {
  var res = [];

  var grouped = _.groupBy(obj, 'article');

  _.forEach(grouped, function(item, key) {
    var total = 0;

    if (_.size(item) === 1) {
      total = item[0].quantity;
    } else {
      total = _.reduce(item, function(acc, elem) {
        return acc + elem.quantity;
      }, 0);
    }

    res.push({
      article: parseInt(key),
      total_orders: total
    });
  });
  return _.sortBy(res, "total_orders").reverse();
};

// export the worker function as a nodejs module
module.exports = worker;
