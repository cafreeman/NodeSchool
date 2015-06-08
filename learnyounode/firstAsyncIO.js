
var fs = require('fs');

var path = process.argv[2];

function readIn(callback) {
  fs.readFile(path, function(err, data) {
    if (err) {
    throw err;
    }
    console.log(data);
  })
}

// file = file.split('\n');

// console.log(file.length - 1);