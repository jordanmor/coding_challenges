// Source: 	freeCodeCamp - "JavaScript Algorithms and Data Structures Certification"

// ***** Seek and Destroy *****

/* 
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array 
that are of the same value as these arguments.
*/

function destroyer(arr) {
  var args = [];
  for(var i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  var newArr = arr.filter(function(val) {
    return args.indexOf(val) === -1;
  });
  return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 3 ,9, 7, 7, 1], 2, 3, 5, 7));
// Result: [ 1, 1, 4, 6, 9, 1 ]

// ============== OTHER SOLUTIONS ============== //

// Solution #2
function destroyer2(arr) {
  var args = [];
  var newArr = [];
  for(var i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  for(var i = 0; i < arr.length; i++) {
    if (args.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}