function countP(text) {
  let count = 0;
  for (const char of text) {
    if (char.toLowerCase() === "p") {
      count++;
    }
  }
  return count;
}

console.log(countP("Paralelepipedo"));
