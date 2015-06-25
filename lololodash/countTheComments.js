// include the Lo-Dash library
var _ = require("lodash");

var worker = function(obj) {
  return _.chain(obj)
          .groupBy("username")
          .map(function(item, key) {
            return {"username": key,
                    "comment_count": _.size(item)};
          })
          .sort("comment_count")
          .reverse()
          .value();
};

// export the worker function as a nodejs module
module.exports = worker;
