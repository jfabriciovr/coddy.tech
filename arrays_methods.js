```
Create a function named swapEnds that recieves one argument: an array.
The function should swap the first and last elements of the array and return the modified array. If the array has fewer than two elements, it should return the array unchanged.
```;

function swapEnds(arr) {
  if (arr.length < 2) {
    // if the array has only one or no elements, return the array unchanged
    return arr;
  }
  let first = arr.shift(); // remove the first element
  let last = arr.pop(); // remove the last element
  arr.unshift(last); // add the last element to the beginning
  arr.push(first); // add the first element to the end
  return arr; // return the modified array
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

```
Write a function named processArray that takes an array of numbers as an argument. The function should do the following:

    Remove the last element from the array.
    Add the number 10 to the end of the array.
    Sort the array.
    Check if the array includes the number 5. If it does, replace it with the number 50.
    Reverse the order of the elements in the array.
    Return the modified array.

For example:

    processArray([1, 2, 3, 4, 5, 6]) should return [50, 4, 3, 2, 10, 1]
    processArray([9, 6, 3, 12]) should return [9, 6 ,3 ,10]

```;
// my solution
function processArray(arr) {
  arr.pop();
  arr.push(10);
  arr.sort();
  if (arr.includes(5)) {
    index = arr.indexOf(5);
    sorted[index] = 50;
  }
  return sorted.reverse();
}

// coddy's solution
function processArray(arr) {
  arr.pop();
  arr.push(10);
  arr.sort();
  if (arr.includes(5)) {
    arr[arr.indexOf(5)] = 50;
  }
  arr.reverse();
  return arr;
}
