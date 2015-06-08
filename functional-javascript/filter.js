
function getShortMessages(messages) {
  return messages.map(function(arr) {
    return arr.message;
  }).filter(function(arr) {
    return arr.length < 50;
  });
}

module.exports = getShortMessages;
