/*
Challenge

Create a function mirrorRows that takes a 2D array
matrix as an argument and returns a new 2D array
in which each row is reversed.

*/

function mirrorRows(matrix) {
  let reversedMatrix = [];

  for (let row = 0; row < matrix.length; row++) {
    //Reverse each row
    const reversedRow = [...matrix[row]].reverse();
    reversedMatrix.push(reversedRow);
  }
  return reversedMatrix;
}

console.log(
  mirrorRows([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
