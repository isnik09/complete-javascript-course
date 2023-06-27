"use strict";

/*
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo, Italy ",
  categories: ["Italian", "Pizzeria", "Veggie"],
  starterMenu: ["Garlic Bread", "Focaccia", "Bruschetta", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const arr = [2, 3, 5];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [first, second] = restaurant.categories;
console.log(first, second);

let aa = 10;
let bb = 20;

[aa, bb] = [bb, aa];
console.log(aa, bb);
*/

/*
const restaurant = {
  restaurantName: "El classico",
  location: "Classic city, Italy",
  categories: ["One", "Two", "Three", "Four"],
  starterMenu: ["SM1", "SM2", "SM3"],
  mainMenu: ["MM1", "MM2", "MM3"],
  openingHours: {
    tue: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const { restaurantName, openingHours, categories } = restaurant;
console.log(restaurantName, openingHours, categories);

console.log(restaurant.order(1, 2));

*/

/*
const oneArr = ["One", "Two", "Three"];
const twoArr = [1, 2, 3];

const joinedArr = [...oneArr, ...twoArr];
console.log(joinedArr);

const fName = "NIK";
const letters = [...fName, 1, 2, 3, 4, 5];

console.log(letters);
*/

/*

console.log(3 || "NIK"); // 3
console.log("" || "NIK"); // NIK
console.log(undefined || null); //null
console.log(true || 0); // true

*/

/*

let guests = null;

console.log(guests || 14);
console.log(guests && 14);

*/

/*

const a = null;
const b = "NIK";
console.log(a ?? b);

console.log(null ?? "NIK");
*/

const arr = ["Ana", "Elsa", "Olaf", "Christoph"];
for (const character of arr) {
}
