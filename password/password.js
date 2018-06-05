function obfuscate(pwd) {
  var res = '';
  for (var i = 0; i < pwd.length; i++) {
    switch(pwd[i]) {
      case 'a':
        res += '4';
        break;
      case 'e':
        res += '3';
        break;
      case 'o':
        res += '0';
        break;
      case 'l':
        res += '1';
        break;
      default:
        res += pwd[i];
        break;
    }
  }
  return res;
}

// get password without treatment
var password = process.argv[2];

// show obfuscated password
console.log(obfuscate(password));