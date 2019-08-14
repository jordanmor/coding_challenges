/**
 * -- Challenge Instructions --
 * We'll pass you an array of two numbers. Return the sum of those two numbers 
 * and all numbers between them. The lowest number will not always come first.
 * 
 * Source: 	freeCodeCamp - "JavaScript Algorithms and Data Structures Certification"
 */

// Solution #1
const sumAll = function(arr) {
  return (Math.abs(arr[0] - arr[1]) + 1) * (arr[0] + arr[1]) / 2;
}

console.log(sumAll([10, 5])); // 45
console.log(sumAll([16, 2])); // 135

// ============== OTHER SOLUTIONS ============== //

// Solution #2
const sumAll2 = function(arr) {
  let sum = 0;

  for(let i = Math.min(...arr), max = Math.max(...arr); i <= max; i++) {
      sum += i;
  }
  return sum;
}

// Solution #3
const sumAll3 = function(arr) {
  const min = Math.min(arr[0], arr[1]), max = Math.max(arr[0], arr[1]);
  let sum = 0;

  for(let i = min; i <= max; i++) {
      sum += i;
  }
  return sum;
}