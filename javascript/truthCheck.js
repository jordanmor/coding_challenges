/**
 * -- Challenge Instructions --
 * Check if the predicate (second argument) is truthy on all elements 
 * of a collection (first argument). Remember, you can access object properties 
 * through either dot notation or [] notation.
 * 
 * Source: 	freeCodeCamp - "JavaScript Algorithms and Data Structures Certification"
 */

// Solution #1
function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre]);
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
// false

// ============== OTHER SOLUTIONS ============== //

// Solution #2
function truthCheck2(collection, pre) {
  for(let i = 0; i < collection.length; i++) {
    if(!collection[i][pre]) {
      return false;
    } 
  }
  return true;
}

// Solution #3
function truthCheck3(collection, pre) {
  for(let prop of collection) {
    console.log(prop);
    if(!prop[pre]) {
      return false;
    } 
  }
  return true;
}