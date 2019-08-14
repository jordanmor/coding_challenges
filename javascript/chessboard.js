/**
 * -- Challenge Instructions --
 * Write a program that creates a string that represents an 8×8 grid, 
 * using newline characters to separate lines. At each position 
 * of the grid there is either a space or a "#" character. 
 * The characters should form a chessboard.
 * 
 * When you have a program that generates this pattern, 
 * define a binding size = 8 and change the program so 
 * that it works for any size, outputting a grid 
 * of the given width and height.
 * 
 * Source: Marijn Haverbeke - "Eloquent JavaScript"
 */

// Solution #1
function chessboard(n) {
  let str = '';
  for(let row = 0; row < n; row++) {
    for(let column = 0; column < n; column++) {
     str += (column + row) % 2 === 0 ? ' ' : '#';
    }
    if (row < n - 1) str+= '\n';
  }
  return str;
}

console.log(chessboard(8));