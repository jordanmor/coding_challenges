/**
 * -- Challenge Instructions --
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 * 
 * Source: 	freeCodeCamp - "JavaScript Algorithms and Data Structures Certification"
 */

// Solution #1
function fearNotLetter(str) {

  let firstCharCode = str.charCodeAt(0);

  for(let i = 0; i < str.length; i++) {

    let currentCharCode = str.charCodeAt(i);

    if (currentCharCode !== firstCharCode + i) {
      return String.fromCharCode(currentCharCode - 1);
    }  
  } 
  return undefined;
}

console.log(fearNotLetter("abcdefghijklno")); // m

// ============== OTHER SOLUTIONS ============== //

// Solution #2
function fearNotLetter2(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  if(alphabet.indexOf(str) !== -1) {
    return undefined;
  } else {
    const completeSegment = alphabet.substr(alphabet.indexOf(str.charAt(0)), str.length + 1);
    console.log(completeSegment);
    for(let i = 0; i < completeSegment.length; i++) {
      if( str.indexOf(completeSegment.charAt(i)) === -1 ) {
        return completeSegment.charAt(i); 
      }
    }
  } 
}

// Solution #3
function fearNotLetter3(str) {
  for(let i = 0; i < str.length; i++) {
    let currentCharCode = str.charCodeAt(i);
    let nextCharCode = str.charCodeAt(i + 1);
    if ( currentCharCode !== nextCharCode - 1 ) {
      return String.fromCharCode(currentCharCode + 1);
    }
  }
  return undefined;
}