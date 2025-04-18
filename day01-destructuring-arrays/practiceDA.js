"use strict"

const restaurant = {
  name: "Phelps Cook",
  location: "Abuja, Nigeria",
  categories: ["Fast-Food", "Snacks", "Classic"],
  starterMenu: ["Fried-Rice", "Amala", "Beans","Fried Chicken", "Cake"],
  mainMenu: ["Pasta", "Meat-Pie", "Pounded-Yam"],
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  }
};

//First Example 
const arr = [2, 3, 4];
const [a, b, c] = arr;

//console.log(b, c);

// <<< I observed that destructuring is like assigning values to variables. >>>

// <<< Destructuring the object example >>>
// Getting the 2nd and 4th food in the starter menu --- other testing.
const [ ,second, ,fourth] = restaurant.starterMenu;
console.log(second, fourth);

const [x, y, z] = restaurant.mainMenu;
console.log(x, y, z);

//Switching variables or order in array
let [one, two] = restaurant.categories;
console.log(one, two);

[one, two] = [two, one];
console.log(one, two)

//Creating variables from function call or Function returning an array and then destructuring it.
// console.log(restaurant.order(1, 1)) 
const [start, main] = restaurant.order(0, 1);
console.log(start, main);

//Destructuring nested array
const nestArr = [1, 3, 4, [7, 8]];
const [j, ,k, [l, m]] = nestArr;
console.log(j, k, l, m);

//Using default values for arrays
const ballColourVote = ["Red", "Yellow", "Green"];
const [r, s, t, u = "Purple"] = ballColourVote;
console.log(r, s, t, u);
