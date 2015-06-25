// include the Lo-Dash library
var _ = require("lodash");

var worker = function(obj) {
  obj.logins = _.size(obj.login);
  var compiled = _.template('Hello ${ name } (logins: ${ logins })');
  return compiled(obj);
};

// export the worker function as a nodejs module
module.exports = worker;
