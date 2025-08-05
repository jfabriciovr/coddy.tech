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
    arr[index] = 50;
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

```
ITERATING OVER ARRAYS

Create a program that receives an array
of strings as input (given), and prints 
a new array containing only the words longer
than 5 characters
```;
let arr = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];
//let arr = inp.split(", "); // Don't change this line

let newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > 5) {
    newArr.push(arr[i]);
  }
}
console.log(newArr);
```
The forEach method allows you to loop through a sequence (like an array) while keeping track of each item.

Without forEach we would access both the index and the value the following way:

let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

forEach is a more elegant way to get both index and value:

let fruits = ["apple", "banana", "orange"];
fruits.forEach((fruit, index) => {
      console.log(Index ${index}: ${fruit});
});

Both examples will output:

Index 0: apple
Index 1: banana
Index 2: orange

```;
//let arr = inp.split(", ").map(Number); // Don't change this line

let newArray = [];
arr.forEach((num, index) => {
  if (num < 50 || num % 5 === 0) {
    newArray.push(num);
  }
});
console.log(newArray);

```
for...of Loop

The for...of loop provides a simple way to iterate over the values of iterable objects, such as arrays, strings, maps, sets, and more. It combines the conciseness of forEach with the ability to break and continue.

Here's the basic syntax of a for...of loop:

for (const element of iterable) {
    // Code to be executed for each element
}

    element: On each iteration, the next value from the iterable object is assigned to this variable.
    iterable: The object whose elements are being iterated over (e.g., an array or a string).

Here's an example with an array:

const fruits = ["apple", "banana", "orange"];

for (const fruit of fruits) {
    console.log(fruit);
}

Output:

apple
banana
orange

Here's another example with a string:

const text = "hello";

for (const char of text) {
    console.log(char);
}

Output:

h
e
l
l
o

Compared to traditional for loops or the forEach method, for...of offers a more straightforward syntax for many common use cases, especially when you don't need the index of each element.
``````
CHALLENGE:

Write a function named countVowels that takes a string as an argument and returns the number of vowels (a, e, i, o, u) in the string. Use a for...of loop to iterate over the characters of the string.

For example:

    countVowels("hello") should return 2
    countVowels("javascript") should return 3

    Count also upper letters!
```;
function countVowels(str) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
