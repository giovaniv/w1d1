function pigLatin(str) {
  var res = '';
  for (var i = 1; i < str.length; i++) {
    res += str[i];
  }
  return res + str[0] + 'ay';
}

var args = process.argv.slice(2);
var res = '';

for (var i = 0; i < args.length; i++) {
  if (i === 0) {
    res += pigLatin(args[i]);
  } else {
    res += ' ' + pigLatin(args[i]);
  }
}

console.log(res);