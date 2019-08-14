/**
 * -- Challenge Instructions --
 * Given a positive integer num, return the sum 
 * of all odd Fibonacci numbers that are less than or equal to num.
 * The first two numbers in the Fibonacci sequence are 1 and 1. 
 * Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
 * For example, sumFibs(10) should return 10 because 
 * all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
 * 
 * Source: 	freeCodeCamp - "JavaScript Algorithms and Data Structures Certification"
 */

// Solution #1
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if(currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

console.log(sumFibs(14)); // 23

// ============== OTHER SOLUTIONS ============== //

// Solution #2
function sumFibs2(num) {

  let total = 0;
  let a = 1, b = 0, temp;

  while (num >= b){
    if(b % 2 !== 0) {
      total += b;
    }
    temp = a;
    a = a + b;
    b = temp;
  }

  return total;
}