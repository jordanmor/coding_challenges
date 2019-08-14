// Source: 	freeCodeCamp - "JavaScript Algorithms and Data Structures Certification"

// ***** Arguments Optional *****

/* 
Create a function that sums two arguments together. If only one argument is provided, 
then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2); sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.
*/

// Solution #1
function addTogether() {
  const args = [...arguments];
  // Make sure arguments are numbers or return undefined
  if ( args.some(num => typeof num !== 'number') ) {
    return undefined;
  } else if (args.length > 1) {
    // if two or more arguments find sum
    return args.reduce((sum, num) => sum += num, 0);
  } else {
    // when only one argument, still check if number. If not return undefined
    // Add argument from closure to outer function argument
    return secondArg => typeof secondArg !== 'number' ? undefined : secondArg + args[0];
  }
}

console.log( addTogether(3, 2) ); // 5
console.log( addTogether(3, 'a') ); // undefined
console.log( addTogether(3)(5) ); // 8
console.log( addTogether(3)([7]) ); // undefined

// ============== OTHER SOLUTIONS ============== //

// Solution #2
function addTogether3() {
  const args = [...arguments];
  return (args.some(num => typeof num !== 'number')) ? undefined
          : args.length > 1 ? args.reduce((sum, num) => sum += num, 0) 
          : secondArg => typeof secondArg !== 'number' ? undefined
          : secondArg + args[0];
}

// Solution #3
function addTogether2() {
  const args = [...arguments];

  if (args.some(num => typeof num !== 'number')) {
    return undefined;
  } else if (args.length > 1) {
    return args.reduce((sum, num) => sum += num, 0);
  } else {
    return function(secondArg) {
      if (typeof secondArg !== 'number') {
        return undefined;
      } else {
        return secondArg + args[0];
      }
    }
  }
}