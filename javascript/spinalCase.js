/**
 * -- Challenge Instructions --
 * Convert a string to spinal case. 
 * Spinal case is all-lowercase-words-joined-by-dashes.
 * 
 * Source: 	freeCodeCamp - "JavaScript Algorithms and Data Structures Certification"
 */

// ***** Spinal Tap Case *****

// Solution #1
 function spinalCase(str) {
  return str.replace(/([a-z])([A-Z])|[_\s]+/g, '$1-$2').toLowerCase();
}

console.log(spinalCase('ThisIsSpinalTap   andNowThis here__now'));
// Result: this-is-spinal-tap-and-now-this-here-now
console.log(spinalCase("The_Andy_Griffith_Show"));
// Result: the-andy-griffith-show

// ============== OTHER SOLUTIONS ============== //

// Solution #2
function spinalCase2(str) {
  return str.split(/[_\s]+|(?=[A-Z])/).join('-').toLowerCase();
}

// Solution #3
function spinalCase3(str) {
  return str
    .replace(/[\s_]+/g, '-')
    .replace(/\B[A-Z]/g, (capitalLetter) => `-${capitalLetter}`)
    .toLowerCase();
  }
  
// Solution #4
function spinalCase4(str) {
  return str
  .replace(/([a-z])([A-Z])/g, '$1 $2')
  .replace(/\s+|_+/g, '-')
  .toLowerCase();
}