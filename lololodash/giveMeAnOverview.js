// include the Lo-Dash library
var _ = require("lodash");

var worker = function(obj) {
  return _.reduce(obj,
    function(acc, elem, key) {
      var res = acc[elem].article ? acc.elem : {article : elem.article, total_orders: 0};
      res.total_orders = res.total_orders += elem.quantity;
      return res;
    },
  []);
};

// export the worker function as a nodejs module
module.exports = worker;
