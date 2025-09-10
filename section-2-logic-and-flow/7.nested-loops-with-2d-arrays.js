/*
Challenge

Create a function named countOcurrences that takes
a 2D array of strings matrix and a string target.

It should return how many times target appears
across all rows and columns.

*/

function countOcurrences(matrix, target) {
  // TODO: Implement logic to count how many times 'target' appears in matrix
  counter = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === target) {
        counter++;
      }
    }
  }

  return counter;
}

console.log(
  countOcurrences(
    [
      ["a", "b", "a"],
      ["c", "a", "d"],
      ["a", "e", "f"],
    ],
    "a"
  )
);
// output:
// 4
