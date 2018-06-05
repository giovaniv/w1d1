/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)
var concepts = joinList(conceptList);

function joinList(list) {

  var res = '';

  if (list.length === 0) {
    return '';
  }

  if (list.length > 0) {

    res = list[0];
    for (var i = 1; i < list.length; i++) {
      res += ', ' + list[i];
    }

  }

  return res;

}

console.log("Today I learned about " + concepts + ".");

