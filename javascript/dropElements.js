/**
 * -- Challenge Instructions --
 * Drop the elements of an array (first argument), starting from the front, 
 * until the predicate (second argument) returns true.
 * The second argument, func, is a function you'll use to test 
 * the first elements of the array to decide if you should drop it or not.
 * Return the rest of the array, otherwise return an empty array.
 * 
 * Source: freeCodeCamp - "JavaScript Algorithms and Data Structures Certification"
 */

// Solution #1
function dropElements(arr, func) {

  while(!func(arr[0])) {
    arr.shift();
  }
  return arr;
}

console.log(dropElements([4, 5, 2, 4, 1], function(n) {return n < 3; }));
// Result: [ 2, 4, 1 ]

// ============== OTHER SOLUTIONS ============== //

// Solution #2
function dropElements2(arr, func) {

  for(let i = 0, x = arr.length; i < x; i++) {
    if(func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  
  return arr;
}