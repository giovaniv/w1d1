function obfuscate(pwd, s, d) {

  var res = '';
  var pos_s = 0;
  var pos_d = 0;

  for (var i = 0; i < pwd.length; i++) {
    pos_s = s.indexOf(pwd[i]);
    if (pos_s >= 0) {
      pos_d = d[pos_s];
      res += pos_d;
    }
    else {
      res += pwd[i];
    }
  }
  return res;
}

// get password without treatment
var password = process.argv[2];
var source = ['a','e','o','l'];
var destiny = ['4','3','0','1'];

// show obfuscated password
console.log(obfuscate(password, source, destiny));