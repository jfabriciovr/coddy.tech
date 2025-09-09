/*
Challenge

Create a function called formatBlogTitle that:

1. Takes a blog title string as input.
2. Trims any whitespace from both ends
3. Makes the first character of each word uppercase
4. Replaces all occurrences of "Javascript" (case insensitive) 
with "JavaScript".
5. Returns the formated title

Example Input:
" how to learn javascript for beginners"
Expected Output:
"How To Learn JavaScript For Beginners"

*/
/* my solution*/

function formatBlogTitleFab(title) {
  console.log(title);
  let newTitle = "";
  for (let i = 0; i < title.length; i++) {
    if (title[i - 1] === " ") {
      newTitle += title[i].toUpperCase();
    } else {
      newTitle += title[i];
    }
  }
  trimedTitle = newTitle.trim();

  return trimedTitle;
}
console.log(formatBlogTitleFab("    how to learn javascript for beginners "));

/* Coddy's solution */

function formatBlogTitle(title) {
  // Trim whitespace from both ends
  let trimmedTitle = title.trim();

  // Split the title into words
  let words = trimmedTitle.split(" "); // ["how", "to", "learn", "javascript", "for", "beginners"]

  // Capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    if (words[i]) {
      words[i] =
        words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
    }
  }

  // Join the words back together
  let formattedTitle = words.join(" ");

  // Replace all occurrences of "javascript" with "JavaScript"
  //formattedTitle = formattedTitle.replaceAll("Javascript", "JavaScript");

  return formattedTitle;
}

console.log(formatBlogTitle("    how to learn javascript for beginners "));
