// Source: 	Stephen Grider - "Coding Interview Bootcamp: Algorithms + Data Structures"

/* 
--- Directions
Given a string, return a new string with the reversed
order of characters
--- Examples
  reverse('apple') === 'leppa'
  reverse('hello') === 'olleh'
  reverse('Greetings!') === '!sgniteerG'
*/


// #1 Solution - BEST (most straightforward solution)
function reverse(str) {
  let reversedStr = '';
  for (let char of str) {
    reversedStr = char + reversedStr;
  }
  return reversedStr;
}

console.log(reverse('Greetings!'));

// #2 Solution - concise, but less straighforward than solution #1
// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }

// #3 Solution - (use of for-of loop (solution #1) is preferable to traditional for loop) 
// function reverse(str) {
//   let reversedStr = '';
//   for(let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str.charAt(i);
//   }
//   return reversedStr;
// }

// #4 Solution - TOO EAST for interview purposes
// function reverse(str) {
//   return str.split('').reverse().join('');
// }


/* 
Solutions below split string into an array. In the case of a string reversal,
this is an unncessary step since you can iterate over a string with a for-of loop.
Possible exception is solution #2 which affords a concise, elegant solution.
*/

// function reverse(str) {
//   const reversedArray = [];
//   for (let char of str) {
//     reversedArray.unshift(char);
//   }
//   return reversedArray.join('');
// }

// function reverse(str) {
//   const array = str.split('');
//   const reversedArray = [];
//   for(let char of array) {
//     reversedArray.unshift(char);
//   }
//   return reversedArray.join('');
// }

// function reverse(str) {
//   const reversedArray = [];
//   str.split('').forEach(char => {
//     reversedArray.unshift(char);
//   });
//   return reversedArray.join('');
// }