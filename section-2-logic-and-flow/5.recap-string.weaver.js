/* Challenge 

Create a function named stringWeaver that takes two strings and returns a new string where:

    Ignore numbers as if they don't exists. Remove all of the numbers from both strings first.
    Characters from both strings alternate (first char from first string, first char from second string, second char from first string, etc.)
    If one string is longer than the other, add the remaining characters at the end
    Convert all vowels to uppercase

Return the final string

*/

function stringWeaver(str1, str2) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // remove numbers from both strings Fabs version
  let cleanStr1 = "";
  let cleanStr2 = "";
  for (char of str1) {
    if (!numbers.includes(char)) {
      cleanStr1 += char;
    }
  }
  for (char of str2) {
    if (!numbers.includes(char)) {
      cleanStr2 += char;
    }
  }

  // Remove numbers from both strings coddy's version
  /*
  let cleanStr1 = "";
  let cleanStr2 = "";

  for (let i = 0; i < str1.length; i++) {
    if (!numbers.includes(str1[i])) {
      cleanStr1 += str1[i];
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (!numbers.includes(str2[i])) {
      cleanStr2 += str2[i];
    }
  }
*/
  let result = "";
  let i = 0;

  // Alternate characters while both strings have characters
  while (i < cleanStr1.length && i < cleanStr2.length) {
    // Add character from first string
    let char1 = cleanStr1[i];
    if (vowels.includes(char1)) {
      char1 = char1.toUpperCase();
    }
    result += char1;

    // Add character from second string
    let char2 = cleanStr2[i];
    if (vowels.includes(char2)) {
      char2 = char2.toUpperCase();
    }
    result += char2;

    i++;
  }

  // Add remaining characters from longer string
  let remaining =
    cleanStr1.length > cleanStr2.length
      ? cleanStr1.slice(i)
      : cleanStr2.slice(i);

  console.log("Remaining characters:", remaining);

  for (let j = 0; j < remaining.length; j++) {
    let char = remaining[j];
    if (vowels.includes(char)) {
      char = char.toUpperCase();
    }
    result += char;
  }

  return result;
}

console.log(stringWeaver("h2ello", "w1orldert")); // output: hwEOlrllOd
