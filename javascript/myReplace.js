/**
 * -- Challenge Instructions --
 * Perform a search and replace on the sentence using the arguments provided and return the new sentence.
 * First argument is the sentence to perform the search and replace on.
 * Second argument is the word that you will be replacing (before).
 * Third argument is what you will be replacing the second argument with (after).
 * NOTE: Preserve the case of the original word when you are replacing it. 
 * For example if you mean to replace the word "Book" with the word "dog", 
 * it should be replaced as "Dog"
 * 
 * Source: 	freeCodeCamp - "JavaScript Algorithms and Data Structures Certification"
 */

// Solution #1
var myReplace = function(str, before, after) {
  if(before.charCodeAt(0) <= 90) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }

  return str.replace(before, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
// Result: A quick brown fox leaped over the lazy dog

// ============== OTHER SOLUTIONS ============== //

// Solution #2
var myReplace2 = function(str, before, after) {
  if(before.charCodeAt(0) <= 90) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }

  var newStr = str.split(' ');
  newStr.splice(newStr.indexOf('jumped'), 1, after);
  return newStr.join(' ');
}

// Solution #3
var myReplace3 = function(str, before, after) {
  if(before.charCodeAt(0) <= 90) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }

  return str.slice(0, str.indexOf(before)) + after + str.slice(str.indexOf(before) + before.length);
}