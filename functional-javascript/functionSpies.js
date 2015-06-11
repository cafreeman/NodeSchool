function Spy(target, method) {
  var origFunc = target[method];

  var result = {
    count: 0
  };

  target[method] = function() {
    result.count++;
    return origFunc.apply(this, arguments);
  };

  return result;
}

module.exports = Spy;
