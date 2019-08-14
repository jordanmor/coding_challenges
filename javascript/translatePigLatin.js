/**
 * -- Challenge Instructions --
 * Translate the provided string to pig latin.
 * Pig Latin takes the first consonant (or consonant cluster) of an English word, 
 * moves it to the end of the word and suffixes an "ay".
 * If a word begins with a vowel you just add "way" to the end.
 * Input strings are guaranteed to be English words in all lowercase.
 * 
 * Source: 	freeCodeCamp - "JavaScript Algorithms and Data Structures Certification"
 */

// Solution #1
function translatePigLatin(str) {
  var re = /[aeiou]/i, pigLatin = '';
  if( str[0].match(re) ) {
    pigLatin =  str + 'way';
  } else {
        var vowelIndice = str.indexOf(str.match(re));
        pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
      }
  return pigLatin;
}

console.log(translatePigLatin("california")); // aliforniacay

// ============== OTHER SOLUTIONS ============== //

// Solution #2
function translatePigLatin(str) {
  var re = /[aeiou]/i;
  if( re.test(str[0]) ) {
    return str + 'way';
  } else {
    for(var i = 1; i < str.length; i++) {
      if(re.test(str[i]) ) {
        return str.substr(i) + str.substr(0, i) + 'ay';
      }
    }
  }
}