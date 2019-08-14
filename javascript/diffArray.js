// ***** Difference Between Two Arrays *****

/* 
Compare two arrays and return a new array with any items only found in one of the 
two given arrays, but not both. In other words, 
return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(
        item => !arr1.includes(item) || !arr2.includes(item)
    );
}

console.log(diffArray4([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [4]

console.log(diffArray4(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
// Result: [ 'pink wool', 'diorite' ]

// ============== OTHER SOLUTIONS ============== //

// Solution #2
function diffArray2(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(
      item => !(arr1.indexOf(item) !== -1 && arr2.indexOf(item) !== -1)
    );
}

// Solution #3
function diffArray3(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  var finalArr = newArr.filter(function(val, i, arr) {
    var counter = 0;
    for(var i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        counter++;
      }
    }
    return counter === 1;
  });

  return finalArr;
}

// Solution #4
function diffArray4(arr1, arr2) {
  var newArr = [];

  function onlyInFirst(first, second) {
    for(var i = 0; i < first.length; i++) {
      if(second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
      }
    }
  }
  
  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

