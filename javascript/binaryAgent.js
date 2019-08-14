/**
 * -- Challenge Instructions --
 * Return an English translated sentence of the passed binary string.
 * The binary string will be space separated.
 * 
 * Source: freeCodeCamp - "JavaScript Algorithms and Data Structures Certification"
 */

// Solution #1
function binaryAgent(str) {

  return str.split(' ')
            .map(binaryCode => String.fromCharCode(parseInt(binaryCode, 2)))
            .join('');
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
// Result: Aren't bonfires fun!?

// ============== OTHER SOLUTIONS ============== //

// Solution #2
function binaryAgent(str) {
  function binaryTranslator(binaryMatch) {
    return String.fromCharCode(parseInt(binaryMatch, 2));
  }
  return str.replace(/[01]{8}\s?/g, binaryTranslator);
}