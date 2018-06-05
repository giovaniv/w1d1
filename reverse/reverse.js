
function reverse(str) {
  var res = '';
  for (var i = str.length-1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

var args = process.argv.slice(2);

for (var i = 0; i < args.length; i++) {
  console.log(reverse(args[i]));
}