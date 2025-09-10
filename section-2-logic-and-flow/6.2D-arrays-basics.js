/* Challenge

Create a function named getColumn that takes three arguments:
a 2D array matrix, an integer numberOfRows, and an integer colIndex.

The function should return an array containing all elements in 
the specified column colIndex.

*/

function getColumn(matrix, numberOfRows, colIndex) {
  const result = [];
  for (let i = 0; i < numberOfRows; i++) {
    result.push(matrix[i][colIndex]);
  }
  return result;
}

console.log(
  getColumn(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    3,
    1
  )
);
// Output:
// [2, 5, 8]
