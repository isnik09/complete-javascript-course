"use strict";

/*
let hasDriversLicenses = false;
const passTest = true;

if (passTest) hasDriversLicenses = true;
if (hasDriversLicenses) console.log("can drive");
*/

/*
function someName() {
  console.log(`My name is NIK`);
}
someName();
*/

/*
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
const appleJuice = fruitProcessor(2, 0);
console.log(appleJuice);
console.log(fruitProcessor(3, 6));
console.log(fruitProcessor(typeof 4, typeof `four`));
*/

/*
// FUNCTION DECLARATION

function calculateAge(birthYear) {
  return 2023 - birthYear;
}
const age1 = calculateAge(2001);
console.log(age1);

// FUNCTION EXPRESSION

const calculateAgeAgain = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calculateAgeAgain(2001);
console.log(age2);

console.log(age1, age2);

*/

/*
// ARROW FUNCTION
const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(2001);
console.log(age3);
*/

/*
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirementYears = 33 - age;
  return `${firstName} retires in ${retirementYears} years!`;
};

console.log(yearsUntilRetirement(2001, `NIK`));
*/

/*
const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
};
console.log(fruitProcessor(3, 5));
*/

/*
const avg = (first, second, third) => (first + second + third) / 3;

const teamOneScore = avg(65, 54, 49);
const teamTwoScore = avg(23, 65, 27);

const checkWinner = function (teamOneScore, teamTwoScore) {
  if (teamOneScore >= teamTwoScore * 2) {
    return `TeamOne is the winner`;
  } else if (teamTwoScore >= teamOneScore * 2) {
    return `TeamTwo is the winner`;
  } else {
    return `We don't have any winner`;
  }
};

console.log(checkWinner(teamOneScore, teamTwoScore));

*/

/*
const friends = new Array(`Ana`, `Elsa`, `Olaf`);

const nik = [`NIK`, 2001 - 2023, friends];
console.log(nik);
*/

/*
const friends = ["Ana", "Elsa", "Olaf"];
friends.push("Christoph");
friends.unshift("Christoph");

const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Elsa"));

console.log(friends.includes("Olaf"));
*/

/*
const calculateTip = (bill) =>
  bill >= 50 || bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [
  calculateTip(bills[0]),
  calculateTip(bills[1]),
  calculateTip(bills[2]),
];
console.log(tips);

const totalBill = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(`Total bill = ${totalBill}`);

*/
/*
const nik = {
  firstName: "NIK",
  lastName: "Nerkar",
  age: 2023 - 2001,
  job: "Emperor",
  friends: ["Nikola Tesla", "Thomas Edison", "Issac Newton"],
};
// nik.job = "Super Emperor";
console.log(nik.job);
console.log(nik["lastName"]);
console.log(
  `${nik.firstName} has ${nik.friends.length} friends, and his best friend is called ${nik.friends[0]}`
);
*/

/*
const calcBmi = function (height, weight) {
  return weight / (2 * height);
};

const person1 = {
  firstName: `John`,
  lastName: `Smith`,
  height: 1.95,
  weight: 92,
  bmi: function () {
    return calcBmi(this.height, this.weight);
  },
};

const person2 = {
  firstName: `Mark`,
  lastName: `Miller`,
  height: 1.69,
  weight: 78,
  bmi: function () {
    return calcBmi(this.height, this.weight);
  },
};

console.log(
  `${person1.firstName} ${person1.lastName}'s BMI (${person1.bmi()}) is ${
    person1.bmi() > person2.bmi() ? `higher` : `lower`
  } than ${person2.firstName} ${person2.lastName}'s BMI (${person2.bmi()})`
);
*/

/*
for (let i = 1; i <= 10; i++) {
  console.log(`This is the ${i} iteration`);
}*/

/*
const myArray = [
  "NIK",
  "The Emperor",
  2023 - 2001,
  ["Ana", "Elsa", "Christoph"],
];

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

const reverseArray = [];

for (let i = myArray.length - 1; i >= 0; i--) {
  reverseArray.push(myArray[i]);
}
console.log(reverseArray);
*/

/*
let rep = 1;
while (rep <= 10) {
  console.log(rep);
  rep++;
}
*/

/*
let i = 0;
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice != 6) {
  i++;
  console.log(`You've rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6)
    console.log(`You won!!! It took ${i} roll${i == 1 ? `` : `s`}`);
}
*/
