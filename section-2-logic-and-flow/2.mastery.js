/* 
Challege

Create a function named reverseVowels that takes a string as its 
parameter and returns the string with all its vowels (a, e, i, o, u)
reversed in position. Non-vowel characters shold stay in theri original 
positions.

for example:

"hello" should return "holle" (because 'e' and 'o' swap positions)

"programming" should return "pregramming" (because 'o', 'a' and 'i' are reversed)

The function should be case-sensitive

*/

function reverseVowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  // Convert string to array to make it mutable
  const chars = str.split("");

  // First, collect all vowels
  let foundVowels = [];
  for (let char of str) {
    if (vowels.includes(char)) {
      foundVowels.push(char);
    }
  }

  // Reverse the vowels array
  foundVowels.reverse();

  // Replace vowels in the original string
  let vowelIndex = 0;
  for (let i = 0; i < chars.length; i++) {
    if (vowels.includes(chars[i])) {
      chars[i] = foundVowels[vowelIndex];
      vowelIndex++;
    }
  }

  // Join the array back into a string and return
  return chars.join("");
}

console.log(reverseVowels("hello")); //holle
console.log(reverseVowels("programming")); //prigrammong
