// Source: 	freeCodeCamp - "JavaScript Algorithms and Data Structures Certification"

/* The DNA strand is missing the pairing element. 
Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, 
and all the arrays are grouped into one encapsulating array.
*/

// --- BEST SOLUTION ---
function pairElement(dna) {
  const pairs = {
    "A": ["A", "T"],
    "C": ["C", "G"],
    "G": ["G", "C"],
    "T": ["T", "A"]
  };

  return dna.split("").map(el => {
    return pairs[el];
  });
}

console.log(pairElement("GCGAT"));
/*
[
  [ 'G', 'C' ],
  [ 'C', 'G' ],
  [ 'G', 'C' ],
  [ 'A', 'T' ],
  [ 'T', 'A' ]
]
*/

// ============== OTHER SOLUTIONS ============== //

// Solution #2
function pairElement2(str) {
  return str.split('').map(base => {
    const arr = [];
      if (base === 'G') {
        arr.push(base, 'C');
        return arr;
      } else if (base === 'C') {
        arr.push(base, 'G');
        return arr;
      } else if (base === 'A') {
        arr.push(base, 'T');
        return arr;
      } else if (base === 'T') {
        arr.push(base, 'A');
        return arr;
      }
    });
}

// Solution #3
function pairElement3(dna) {
  return dna.split('').map(el => {
    if (el === 'A') {
      return ['A', 'T'];
    } else if (el === 'C') {
        return ['C', 'G'];
      } else if (el === 'G') {
        return ['G', 'C'];
      } else if (el === 'T') {
        return ['T', 'A'];
      }
  });
}