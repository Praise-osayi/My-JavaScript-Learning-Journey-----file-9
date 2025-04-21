"use strict"

const restaurant = {
  name: "Phelps Cook",
  residence: "Abuja, Nigeria",
  categories: ["Fast-Food", "Snacks", "Classic"],
  starterMenu: ["Fried-Rice", "Amala", "Beans", "Fried Chicken", "Cake"],
  mainMenu: ["Pasta", "Meat-Pie", "Pounded-Yam"],
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery: function ({time, address, mainIndex, starterIndex}) {
    console.log(`Order delivered! ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}.`)
  },
   
  openingHours: {
  
    thu: {
      open: 10,
      close: 20,
    },

    fri: {
        open: 10,
        close: 22,
    },

    sat: {
      open: 9,
      close: 23,
    },
    
  }
};

//Basic destructuring 
const {name, residence} = restaurant;
console.log(name, residence);

//Changing the property name 
const {
  name: restaurantName,
  openingHours: time
} = restaurant;

console.log(restaurantName, time);
 
//Setting default value and also changing property name
const {residence: address = [], contact = []} = restaurant;
console.log(address, contact);

//Mutation in object 
let a = "first";
let b = "second";
const muth = {a: "third", b: "forth"};
({a, b} = muth);
console.log(a, b);

//Destructuring nested objects
const {fri} = restaurant.openingHours;
console.log(fri);

const {sat: {open, close}} = restaurant.openingHours;
console.log(open, close);

//Destructuring objects in method 
 restaurant.orderDelivery ({
   time: "15:30",
   address: "Wale Street, Asokoro",
   mainIndex: 2,
   starterIndex: 2,
   })


  
