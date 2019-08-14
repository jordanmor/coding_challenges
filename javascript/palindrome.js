/**
 * -- Challenge Instructions --
 * Given a string, return true if the string is a palindrome
 * or false if it is not.  Palindromes are strings that
 * form the same word if it is reversed. "Do" include spaces
 * and punctuation in determining if the string is a palindrome.
 * Examples:
 * palindrome("abba") === true
 * palindrome("abcdefg") === false
 * 
 * Source: 	Stephen Grider - "Coding Interview Bootcamp: Algorithms + Data Structures"
 */

// Solution #1 - Most straightforward solution
function palindrome(str) {
  let reversedStr = '';
  for(let char of str) {
    reversedStr = char + reversedStr;
  }
  return reversedStr === str;
}

console.log(palindrome('abba')); // true
console.log(palindrome('abcdefg')); // false

// ============== OTHER SOLUTIONS ============== //

// Solution #2 - Most practical (too easy for interview purposes)

function palindrome2(str) {
  const reversedStr = str.split('').reverse().join('');
  return reversedStr === str;
}

// Solution #3 - More concise, not as readable

function palindrome3(str) {
  return str === str.split('').reverse().join('');
}

// Solution #4 - Makes use of reduce() method

function palindrome4(str) {
  const reversedStr = str.split('').reduce((rev, char) => char + rev, '');
  return str === reversedStr;
}

// Solution #5 - More concise, not as readable

function palindrome5(str) {
  return str === str.split('').reduce((rev, char) => char + rev, '');
}

// Solution #5 - Makes use of every() method

function palindrome5(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}