/* Challenge */

/* 

Write a function named doubleOdds that takes one input:

1. numbers - an array of numbers.

The function should:

1. Double only the odd numbers in the array.
2. Return the resulting array.

*/
function doubleOdds(numbers) {
  let newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newNumbers.push(numbers[i] * 2);
    } else {
      newNumbers.push(numbers[i]);
    }
  }
  return newNumbers;
}
console.log(doubleOdds([1, 3, 5, 7]));
