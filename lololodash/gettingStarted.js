// include the Lo-Dash library
  var _ = require("lodash");

  var worker = function(obj) {
      return _.where(obj, { active: true });
  };

  // export the worker function as a nodejs module
  module.exports = worker;
