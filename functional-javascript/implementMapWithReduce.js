
module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(accum, elem) {
    return accum.concat(fn(elem));
  },[]);
};
