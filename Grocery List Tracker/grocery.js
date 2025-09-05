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

/*
Now, add a function named viewList that gets no arguments and prints the grocery list
*/
function viewList() {
  if (groceryList.lenth === 0) {
    console.log("The grocery list is empty");
  } else {
    console.log("Grocery List:");
    /* my solution*/
    /*
    for (let counter = 1, i = 0; i < groceryList.length; i++, counter++) {
      console.log(`${counter}. ${groceryList[i]}`);
    }
    */
    /* coddy's solution */
    groceryList.forEach((item, index) => console.log(`${index + 1}. ${item}`));
  }
}

viewList();
addItem("Milk");
addItem("Bread");
addItem("Eggs");
viewList();
removeItem("Bread");
viewList();
removeItem("Cheese");
