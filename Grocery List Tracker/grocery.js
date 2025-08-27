/*
Create an empty list that will hold the ingredients, you can name it however you like
*/

let groceryList = [];

/*
Now, add a function named addItem that gets a string (the item) 
and pushes it into the ingrdients list 
*/

function addItem(item) {
  groceryList.push(item);
  //   console.log(item, "added to the grocery list.");
  console.log(`${item} added to the grocery list.`);
}

/*
Now, add a function named removeItem that gets a string (the item)
and removes it from the list
*/

function removeItem(item) {
  if (groceryList.includes(item)) {
    groceryList.splice(groceryList.indexOf(item), 1);
    console.log(`${item} removed from the grocery list.`);
  } else {
    console.log(`${item} is not in the grocery list.`);
  }
}
/*
// ------- coddy's solution
function removeItem(item) {
	const index = groceryList.indexOf(item);
	if (index !== -1) {
		groceryList.splice(index, 1);
		console.log(`${item} removed from the grocery list.`);
	} else {
		console.log(`${item} is not in the grocery list.`);
	}
}
    */
addItem("Milk"); // Milk added to the grocery list.
addItem("Bread"); // Bread added to the grocery list.
addItem("Eggs"); // Eggs added to the grocery list.
removeItem("Bread"); // Bread removed from the grocery list.
removeItem("Cheese"); // Cheese is not in the grocery list.

console.log(groceryList); // ['Milk', 'Eggs']
