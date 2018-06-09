function isMultiple(num,mult) {

  if ( num % mult === 0 ) {
    return true;
  }
  else {
    return false;
  }

}

// ==========================================================
// OLD CODE WITHOUT REFACTOR
// ==========================================================
// function loopyLighthouse(range, multiples, words) {

//   if (range === null || multiples === null || words === null) {
//     return undefined;
//   }

//   if (range.length !== 2 || multiples.length !== 2 || words.length !== 2) {
//     return undefined;
//   }
//   else {

//     for ( var i = range[0]; i <= range[1]; i++ ) {

//       if ( isMultiple(i,multiples[0]) && isMultiple(i,multiples[1]) ) {
//         console.log(words[0] + words[1]);
//       }
//       else if ( isMultiple(i,multiples[0]) ) {
//         console.log(words[0]);
//       }
//       else if ( isMultiple(i,multiples[1]) ) {
//         console.log(words[1]);
//       }
//       else {
//         console.log(i);
//       }

//     }

//   }

// }

function multiplo(number, multiplier, currentValue, newValue) {

  if ( number % multiplier === 0 ) {
    return newValue.toString();
  }
  else {
    return currentValue.toString();
  }

}

function validateStrings(a,b) {

  var x = Number(a);
  var y = Number(b);
  var str = a + b;

  if (a == b) {
    return a;
  }
  else {
    return str.replace(/[0-9]/g,'');
  }

}

function loopyLighthouse(range, multiples, words) {

  var result = '';

  if (!range || !multiples || !words) {
    return undefined;
  }

  if (range.length !== 2 || multiples.length !== 2 || words.length !== 2) {
    return undefined;
  }

  for ( var i = range[0]; i <= range[1]; i++ ) {
    var str1 = multiplo(i,multiples[0],i,words[0]);
    var str2 = multiplo(i,multiples[1],i,words[1]);
    console.log(validateStrings(str1,str2));
  }

  return result;

}

loopyLighthouse([1,15], [2, 3], ["Batty", "Beacon"]);

