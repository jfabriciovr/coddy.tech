/*
Challenge

Write a function named analyzeBudget that:

    Takes three arguments: a list of prices, a list of item names, and a budget per item.
    Prints:
        A list of items you can afford.
        The total cost of the affordable items.
        The number of items out of budget.

Example:
For prices = [10, 20, 5, 15], items = ["Notebook", "Pen", "Eraser", "Bag"], 
and budget = 10, the output should be:

Affordable items: "Notebook", "Eraser"
Total budget needed: 15
Items out of budget: 2

*/

function analyzeBudget(prices, items, budget) {
  // Initialize the results
  let affordableItems = [];
  let totalAffordableCost = 0;
  let unaffordableCount = 0;

  // Iterate over the items
  for (let i = 0; i < items.length; i++) {
    if (prices[i] <= budget) {
      affordableItems.push(items[i]);
      totalAffordableCost += prices[i];
    } else {
      unaffordableCount++;
    }
  }

  // Print the results
  console.log(`Affordable items: ${affordableItems}`);
  console.log(`Total budget needed: ${totalAffordableCost}`);
  console.log(`Items out of budget: ${unaffordableCount}`);
}

analyzeBudget([10, 20, 5, 15], ["Notebook", "Pen", "Eraser", "Bag"], 10);

/* Output:

Affordable items: Notebook,Eraser
Total budget needed: 15
Items out of budget: 2

*/
