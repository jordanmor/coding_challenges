/**
 * -- Challenge Instructions --
 * Write a function that takes two or more arrays and returns a new array 
 * of unique values in the order of the original provided arrays.
 * In other words, all values present from all arrays should be included 
 * in their original order, but with no duplicates in the final array.
 * The unique numbers should be sorted by their original order, 
 * but the final array should not be sorted in numerical order.
 * Check the assertion tests for examples.
 * 
 * Source: 	freeCodeCamp - "JavaScript Algorithms and Data Structures Certification"
 */

// Solution #1
function uniteUnique(arr) {
  const args = [].concat(...arguments);
  return [...new Set(args)];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// Result: [ 1, 3, 2, 5, 4 ]

// ============== OTHER SOLUTIONS ============== //

// Solution #2
function uniteUnique2(arr) {
  const args = Array.from(arguments);

  const newArr = args
    .reduce((a, b) => a.concat(b), [])
    .filter(function(num, index, array) {
      return index === array.indexOf(num);
    });
  return newArr;
}