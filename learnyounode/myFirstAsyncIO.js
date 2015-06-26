var fs = require('fs');

function readFileToString() {
  fs.readFile(process.argv[2], function(err, data) {
    var str = data.toString();
    console.log(str.split('\n').length - 1);
  });
}

readFileToString();
