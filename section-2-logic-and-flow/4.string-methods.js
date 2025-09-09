/* Challenge

Create a function named alternateCase that takes a string
as input and returns a new string where the cases are alternated.
The first character should be uppercase, the second lowercase,
the third uppercase, and so on.

*/

function alternateCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }
  return result;
}

console.log(alternateCase("This is an Example")); // ThIs iS An eXaMpLe
console.log(alternateCase("Hello World")); // HeLlO WoRlD
