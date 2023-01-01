let bestFood // 1. JavaScript parsed the first bestFood declaration

let myBestMeal // 2. the computer parsed myBestMeal variable declaration

bestFood = "Fish and Chips"; // 3. the computer initialized the bestFood variable

myBestMeal = function () {
  console.log(bestFood);
  let bestFood = "Vegetable Fried Rice";
}; // 4. JavaScript initialized myBestMeal variable

myBestMeal(); // 5. the computer invoked myBestMeal’s function

//let bestFood // 6. JavaScript parsed the function’s bestFood declaration

console.log(bestFood); // 7. the computer parsed the function’s console.log statement

// hUncaught ReferenceError // bestFood’s invocation returned an Error