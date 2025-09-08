/* Challenge 

Create a function named countUniqueVowels that takes a string as an argument 
and returns the number of unique vowels in the string (vowels are a, e, i, o, u). 
The function should not be case-insensitive. (include alse the uppercased vowels)

*/

function countUniqueVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let foundVowels = [];
  for (let char of str) {
    if (vowels.includes(char) && !foundVowels.includes(char)) {
      foundVowels.push(char);
    }
  }

  return foundVowels.length;
}

console.log(countUniqueVowels("Hello World"));

// output: 2
