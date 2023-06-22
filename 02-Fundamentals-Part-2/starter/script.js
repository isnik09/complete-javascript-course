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
