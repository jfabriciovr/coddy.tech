```
Create a function named swapEnds that recieves one argument: an array.
The function should swap the first and last elements of the array and return the modified array. If the array has fewer than two elements, it should return the array unchanged.
```;

function swapEnds(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let first = arr.shift();
  let last = arr.pop();
  arr.unshift(last);
  arr.push(first);
  return arr;
}

// Example usage:
console.log(swapEnds([1, 2, 3, 4])); // [4, 2, 3, 1]
console.log(swapEnds([1])); // [1]
console.log(swapEnds([])); // []
console.log(swapEnds(["a", "b", "c"])); // ['c', 'b', 'a']
console.log(swapEnds([true, false])); // [false, true]

```
Create a function named findElement that receives two arguments:

    An array of numbers
    A number to search for

The function should do the following:

    Check if the array includes the number using the includes method.
    If the number is found, return the index of its first occurrence using the indexOf method.
    If the number is not found, return -1.

For example:

    findElement([1, 2, 3, 4, 5], 3) should return 2
    findElement([1, 2, 3, 4, 5], 6) should return -1
```;

function findElement(arr, num) {
  if (arr.includes(num)) {
    return arr.indexOf(num);
  } else {
    return -1;
  }
}
