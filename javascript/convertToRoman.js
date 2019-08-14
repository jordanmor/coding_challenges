// Source: 	freeCodeCamp - "JavaScript Algorithms and Data Structures Certification"

// ***** Roman Numeral Converter *****

/* 
Convert the given number into a roman numeral.
*/

function convertToRoman(num) {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  var romanized = '';

  for(var i = 0; i < decimalValue.length; i++) {
    while(num >= decimalValue[i]) {
      num -= decimalValue[i];
      romanized += romanNumeral[i];
    }
  }

 return romanized;
}

console.log(convertToRoman(1148)); // MCXLVIII

// ============== OTHER SOLUTIONS ============== //

function convertToRoman2(num) {
  var romanNum = '';
  while(num > 0) {
    if(num >= 1000) {
      romanNum += 'M';
      num -= 1000;
    } else if(num >= 900 ) {
      romanNum += 'CM';
      num -= 900;
    } else if(num >= 500) {
      romanNum += 'D';
      num -= 500;
    } else if(num >= 400) {
      romanNum += 'CD';
      num -= 400;
    } else if(num >= 100) {
      romanNum += 'C';
      num -= 100;
    } else if(num >= 90) {
      romanNum += 'XC';
      num -= 90;
    } else if(num >= 50) {
      romanNum += 'L';
      num -= 50;
    } else if(num >= 40) {
      romanNum += 'XL';
      num -= 40;
    } else if(num >= 10) {
      romanNum += 'X';
      num -= 10;
    } else if(num === 9) {
      romanNum += 'IX';
      num -= 9;
    } else if(num >= 5) {
      romanNum += 'V';
      num -= 5;
    } else if(num === 4) {
      romanNum += 'IV';
      num -= 4;
    } else if(num >= 1) {
      romanNum += 'I';
      num -= 1;
    }
  }
 return romanNum;
}