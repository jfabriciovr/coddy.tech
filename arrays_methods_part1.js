```
Arrays have many many methods (functionalities).
    push, pop, shift, unshift, splice, slice, concat, join, reverse, sort, indexOf, lastIndexOf, includes, find, findIndex, filter, map, reduce, forEach, every, some.

    -push: adds one or more elements to the end of an array and returns the new length of the array.
    -pop: removes the last element from an array and returns that element.
    -shift: removes the first element from an array and returns that element.
    -unshift: adds one or more elements to the beginning of an array and returns the new length of the array.

``````
CHALENGE:

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
