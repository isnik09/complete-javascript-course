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

/*

// FOR OF LOOP

const arr = ["Ana", "Elsa", "Olaf", "Christoph"];
for (const character of arr) {
  console.log(character);
}

*/

/*
// LOOPING OVER OBJECTS VAI KEY AND VALUES


const nik = {
  fName: "NIK",
  lName: "NERKAR",
  age: 22,
  likings: "Creation",
};

for (const attrs of Object.values(nik)) {
  console.log(attrs);
}

*/
/*
// SETS

const gamePlayed = new Set([
  "NFS",
  "Forza",
  "COD",
  "RDR2",
  "NFS",
  "NFS",
  "Forza",
  "PROJECT SPEED",
]);

console.log(gamePlayed);
console.log(new Set("SPEED"));
console.log(gamePlayed.size);
console.log(gamePlayed.has("GTA"));
console.log(gamePlayed.add("EW"));
for (const game of gamePlayed) {
  console.log(game);
}
console.log(gamePlayed.clear);

*/

// MAPS

/*

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Seattle, US");
rest.set(2, "Tokyo, Japan");

rest
  .set("categories", ["Indian", "Italian", "French"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

// console.log(rest);
console.log(rest.get(1));
console.log(rest.get(true));
console.log(rest.has("categories"));
console.log(rest.delete(1));
console.log(rest.size);
console.log(rest.clear);

*/

/*

const questions = new Map([
  ["que", "What is best programming language?"],
  [1, "C"],
  [2, "Python"],
  [3, "JavaScript"],
  ["ans", 3],
  [true, "Amazing You're correct"],
  [false, "Try again...:("],
]);

console.log(questions.get("que"));
for (const [key, value] of questions) {
  if (typeof key === "number") console.log(`Answer ${key}, : ${value}`);
}

const ans = Number(prompt(`Your ans`));

alert(questions.get(questions.get("ans") === ans));

*/

/*/
const announcement = `All passengers come to boarding door 22, boarding door 22!`;

console.log(announcement.replace(/door/g, "gate"));
console.log(announcement.replaceAll("door", "gate"));


/*/
