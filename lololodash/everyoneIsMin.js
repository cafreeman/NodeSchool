// include the Lo-Dash library
var _ = require("lodash");

var worker = function(obj) {
  var res = { hot: [],
              warm: [] };
  function checkTemp(item) {
    return item > 19;
  }
  _.forEach(obj, function(item, key) {
    if (_.every(item, checkTemp)) {
      res.hot.push(key);
    } else if (_.some(item, checkTemp)) {
      res.warm.push(key);
    }
  });
  return res;
};

// export the worker function as a nodejs module
module.exports = worker;
