/**
 * -- Challenge Instructions --
 * Given an integer, return an integer that is the reverse ordering of numbers.
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 * 
 * Source: Stephen Grider - "Coding Interview Bootcamp: Algorithms + Data Structures"
 */

// Solution #1
function reverseInt(n) {
  let reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');
    
  return parseInt(reversed) * Math.sign(n);
}

// ============== OTHER SOLUTIONS ============== //

// Solution #2
function reverseInt2(n) {
  let reversed = parseInt(n.toString().split('').reverse().join(''));
  return n < 0 ? -Math.abs(reversed) : reversed;
}

console.log(reverseInt(981) === 189);