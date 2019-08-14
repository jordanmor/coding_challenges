// ***** Caesars Cipher *****

/* 
One of the simplest and most widely known ciphers is a Caesar cipher, 
also known as a shift cipher. In a shift cipher the meanings of the letters 
are shifted by some set amount. A common modern use is the ROT13 cipher, 
where the values of the letters are shifted by 13 places. 
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character 
(i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
  str = str.toUpperCase();
  var newStr = '', charCode;
  for(var i = 0; i < str.length; i++) {
    charCode = str.charAt(i).charCodeAt();
    if(charCode >= 65 && charCode <= 77) {
      newStr += String.fromCharCode(charCode + 13);
    } else if(charCode >= 78 && charCode <= 90) {
      newStr += String.fromCharCode(charCode - 13);
    } else {
      newStr += str.charAt(i);
    }
    
  }
  return newStr;
}

console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ bire GUR YNML SBK!!!"));
// Return: THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX!!!