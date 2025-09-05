/*
Create a function named swapEnds that recieves one argument: an array.
The function should swap the first and last elements of the array and return the modified array. If the array has fewer than two elements, it should return the array unchanged.
 */

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

/* Create a function named findElement that receives two arguments:

    An array of numbers
    A number to search for

The function should do the following:

    Check if the array includes the number using the includes method.
    If the number is found, return the index of its first occurrence using the indexOf method.
    If the number is not found, return -1.

For example:

    findElement([1, 2, 3, 4, 5], 3) should return 2
    findElement([1, 2, 3, 4, 5], 6) should return -1
 */

function findElement(arr, num) {
  if (arr.includes(num)) {
    return arr.indexOf(num);
  } else {
    return -1;
  }
}

/* 
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
 */

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
```;
/* Create a program that receives an array
of strings as input (given), and prints 
a new array containing only the words longer
than 5 characters
*/

let arr = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];
//let arr = inp.split(", "); // Don't change this line

let newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > 5) {
    newArr.push(arr[i]);
  }
}
console.log(newArr);

/* The forEach method allows you to loop through a sequence (like an array) while keeping track of each item.

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
Index 2: orange */

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
```;
/* The for...of loop provides a simple way to iterate over the values of iterable objects, such as arrays, strings, maps, sets, and more. It combines the conciseness of forEach with the ability to break and continue.

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
 */

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

/* 
Create a program that receives a string as input (given), and it prints how many times the character p is in the string.

Some chars might be upper cased, use char.toLoweCase() to convert it to lowe cased.
*/

function countP(text) {
  let count = 0;
  for (const char of text) {
    if (char.toLoweCase() === "p") {
      count++;
    }
  }
  return count;
}

console.log(countP("Paralelepipedo")); // 3

```
Array Slicing

```/*
Slicing allows us to extract portions of an array using the followind syntax: arr.slice(start, stop)
for example, consider this array:

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

Getting a portion of the array:

console.log(numbers.slice(2, 6));
//Output: [2, 3, 4, 5]

This gets elements from indexs 2 (inclusive) to index 6 (exclusive)

Omitting stop parameter:

console.log(numbers.slice(5));
// Output: [5, 6, 7, 8, 9]

When stop is omitted, slice goes until the encodeURI
 */ ```Challenge```;
/*
Create a program that recieves an array as input(given) and prints the followind sliced arrays:

- For odd-lenght arrays: take the middle item and one item on each side(3 items total)
- for even-length arrays: take the two middle items

For this challenge, use Math.floor() because array slicing only works with whole numbers.

Example: Math.floor(5.5) will return 5 as it find the floor of a float number
*/

// let arr = Inp.split(", ").map(Number);
arr = [1, 2, 3, 4, 5];

if (arr.length % 2 === 0) {
  let arrMid = arr.slice(
    Math.floor(arr.length / 2 - 1),
    Math.floor(arr.length / 2 + 1)
  );
  console.log(arrMid);
} else {
  let arrMid = arr.slice(
    Math.floor(arr.length / 2 - 1),
    Math.floor(arr.length / 2 + 2)
  );
  console.log(arrMid);
}
// Output: [2, 3, 4]

```
Array Methods: 

concat(), join(separator), slice(start, end), splice(start, deleteCount, item1, item2,...)

```;
/*
1. concat(): Combines two or more arrays and returns a new array, without modifying the original arrays.

let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log(combined); // Output: [1, 2, 3, 4]

2. join(separator): Joins all elements of an array into a string, separated by the specified separator (optional).

let fruits = ["apple", "banana", "orange"];
let joined = fruits.join(", ");
console.log(joined); // Output: "apple, banana, orange"

3. slice(start, end): Extracts a section of an array and returns a new array. The start index is inclusive, and the end index is exclusive.

let numbers = [1, 2, 3, 4, 5];
let sliced = numbers.slice(1, 4);
console.log(sliced); // Output: [2, 3, 4]

4. splice(start, deleteCount, item1, item2, ...): Changes the contents of an array by removing, replacing, or adding elements. It modifies the original array and returns an array containing the deleted elements (if any).

let numbers = [1, 2, 3, 4, 5];
let removed = numbers.splice(2, 2, 6, 7);
console.log(numbers); // Output: [1, 2, 6, 7, 5]
console.log(removed); // Output: [3, 4]

Challenge
Easy

You are given an array numbers = [1, 2, 3, 4, 5]. Perform the following steps and print the results directly:

    Use concat() to add [6, 7, 8] to the end of the array and print the result.
    Use join() to convert the result of concat() into a string separated by commas and print it.
    Use slice() to extract the first three elements from the original numbers array and print them.
    Use splice() to replace the second element of numbers with 99 and print the modified numbers array.

  */

let numbers = [1, 2, 3, 4, 5];

// Step 1: Use concat() to add [6, 7, 8] and print the result
console.log(numbers.concat([6, 7, 8]));

// Step 2: Use join() to convert the result into a string separated by commas and print it
console.log(numbers.concat([6, 7, 8]).join(","));

// Step 3: Use slice() to extract the first three elements from the original array and print them
console.log(numbers.slice(0, 3));

// Step 4: Use splice() to replace the second element with 99 and print the modified array
numbers.splice(1, 1, 99);
console.log(numbers);

```
Array Methods Part 4

map(callback), filter(callback), reduce(callback, initialValue)

```/*
1. map(callback): Creates a new array populated with the results of calling a provided function on every element in the calling array.

let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]

2. filter(callback): Creates a new array with all elements that pass the test implemented by the provided function.

let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

3. reduce(callback, initialValue): Executes a reducer function on each element of the array, resulting in a single output value.

let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10
*/ ```Challenge Easy ```;
/*
You are given an array numbers = [1, 2, 3, 4, 5]. Perform the following steps and print the results directly:

    Use map() to create a new array where each number is multiplied by 3, and print the result.
    Use filter() to create a new array that only includes numbers greater than 3, and print the result
*/

let numbersArray = [1, 2, 3, 4, 5];

console.log(numbersArray.map((num) => num * 3)); // [3, 6, 9, 12, 15]
console.log(numbersArray.filter((num) => num > 3)); // [4, 5]

```Membership Testing``` /*
You can check whether an element is in an array or not using the indexOf() method:

const arr = ["a", "b", "c"];
console.log(arr.indexOf("b")); // Output: 1
console.log(arr.indexOf("d")); // Output: -1

If the element is not found, indexOf() returns -1.

    You can also use the includes() method that was learned before!
*/```Challenge```;
/*

Create a program that receives two arrays of numbers as input 
and prints new array of all elements that are in the first array but NOT in the second array

*/

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 6];
// Output: [1, 2, 5]

// ----- my solution
let arr3 = [];
for (let num of arr1) {
  if (arr2.indexOf(num) === -1) {
    arr3.push(num);
  }
}
console.log(arr3);

// ------ coddy's solution

let result = [];
for (let i = 0; i < arr1.length; i++) {
  if (!arr2.includes(arr1[i])) {
    result.push(arr1[i]);
  }
}
console.log(result);
