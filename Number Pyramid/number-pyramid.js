/*
Arithmetic operations can also be done on strings. For example:

let str1 = "aaa" + "b";

str1 will hold "aaab"

This is the same as:

let str1 = "aaa";
str1 += "b";

Also, we can even use multiplications with repeat():

let str1 = "a".repeat(10);

str1 will hold "aaaaaaaaaa"

*/
// *******************
// Challenge
// *******************

/*
Each test case has one input - an odd whole number. (given)
Your task is to print n - pyramid using *, here are some examples:
1 - pyramid

*

5 - pyramid

*
***
*****

7 - pyramid

*
***
*****
*******

Input

    odd integer n from user
    1 <= n < 1000

Tips

    Try starting from the small triangles
    Check the hint if you are stuck ;)

    n represents the number of  * in the bottom row
*/

/* HINT

note that for a pyramid of size n you have (n / 2) + 1 rows, so:

let n = ... // Given input
let rows = parseInt(n / 2) + 1
for (let i = 0, i < rows; i++){
  ...
}

Each iteration of the loop prints part of the pyramid from
top to bottom, use i and n

You can also use Math.floor():

let rows = Math.floor(n / 2) + 1
*/

let n = 7;
if (n % 2 !== 0 && n >= 1 && n < 1000) {
  for (let i = 1; i <= n; i += 2) {
    console.log("*".repeat(i));
  }
}

/* coddy's solution */
/*
let rows = parseInt(n / 2) + 1;
for (let i = 0; i < rows; i++) {
  let stars = "";
  stars += "*".repeat(2 * (i + 1) - 1);
  console.log(stars);
}
  */
