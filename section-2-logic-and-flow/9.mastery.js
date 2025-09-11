/*
Challenge

Create a function named multiplyMatrices that takes two
matrices (matrixA and matrixB) and returns their product.

For matrix multiplication:
- Each element in the result matrix is the dot product of a
row from the first matrix and a column from the second matrix
- Matix A with dimensions (m x n) can only be multiplied
with martix B width dimensions (n x p)
- the resulting matrix will have dimentions (m x p)

Example Input:

matrixA = [
[1, 2], 
[3, 4]
]
matrixB = [
[5, 6], 
[7, 8]
]

Expected Output:

[
[19, 22], 
[43, 50]
]

where: 
19 = 5 + 14 = 1*5 + 2*7  (matrixA[r0][c0] * matrixB[r0][c0]) + (matrixA[r0][c1] * matrixB[r1][c0])
22 = 6 + 16 = 1*6 + 2*8  (matrixA[r0][c0] * matrixB[r0][c1]) + (matrixA[r0][c1] * matrixB[r1][c1])

43 = 15 + 28 = 3*5 + 4*7
50 = 18 + 32 = 3*6 + 4*8

*/

function multiplyMatrices(matrixA, matrixB) {
  // Write your code here
  // Check if matrices can be multiplied
  // Create the result matrix with appropriate dimensions
  // Calculate each element in the result matrix
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const rowsB = matrixB.length;
  const colsB = matrixB[0].length;

  const result = [];

  for (let i = 0; i < rowsA; i++) {
    result[i] = [];
    for (let j = 0; j < colsB; j++) {
      result[i][j] = 0;
      for (let k = 0; k < colsA; k++) {
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }

  return result;
}

console.log(
  multiplyMatrices(
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
    [
      [7, 8],
      [9, 10],
      [11, 12],
    ]
  )
);
// output
// [ [ 58, 64 ], [ 139, 154 ] ]
