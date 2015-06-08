
var arguments = process.argv.slice(2)

sum = 0

for (var i = 0; i < arguments.length; i++) {
  sum += Number(arguments[i])
}

console.log(sum)