/**
 * -- Challenge Instructions --
 * Find the smallest common multiple of the provided parameters that 
 * can be evenly divided by both, as well as by all sequential 
 * numbers in the range between these parameters.
 * The range will be an array of two numbers that will not 
 * necessarily be in numerical order.
 * e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 
 * that is evenly divisible by all numbers between 1 and 3.
 * 
 * Source: freeCodeCamp - "JavaScript Algorithms and Data Structures Certification"
 */

function smallestCommons(arr) {

  const max = Math.max(arr[0], arr[1]);
  const min = Math.min(arr[0], arr[1]);
  let multiple = max;

  for(var i = max; i >= min; i--){
    if(multiple % i !== 0){
      multiple += max; 
      i = max;
    } 
  }

  return multiple;  
}

console.log(smallestCommons([1,5])); // 60