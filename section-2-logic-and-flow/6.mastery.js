/*
Challenge

Create a function named getElementsInRow that takes two arguments:

- A 2D array called grid
- An integer rowIndex

The function should return an array containing all elements in the 
specified row. 

If the rowIndex is out of bounds (negative or greater than or equal
to the number of rows), return an empty array.

Example Input:

const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const rowIndex = 1;

Expected Output:
[4, 5, 6]

*/

function getElementsInRow(grid, rowIndex) {
  // Check if rowIndex is valid
  if (rowIndex < 0 || rowIndex >= grid.length) {
    return [];
  }

  // Return the row at the specified index
  return grid[rowIndex];
}

console.log(
  getElementsInRow(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    0
  )
);
// Output:
// [1, 2, 3]
