/* 
console.log("BMI Calculator");

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

console.log("BMI of Mark = " + bmiMark);
console.log("BMI of John = " + bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log("Does mark has higher BMI? " + markHigherBMI);
*/

/*
const currentYear = 2023;
const birthYear = 2001;
const firstName = "NIK";
const os = "Linux";

const coolWayOfWriting = `I'm ${firstName}, a ${
  currentYear - birthYear
} year old ${os} user!`;

console.log(coolWayOfWriting);
*/

/*
const age = 20;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`Can start driving license`);
} else {
  console.log(`Can give test for driving license in ${18 - age}`);
}
*/

/*
const age = 18;
if (age === 18) console.log(`You're 18!`);

console.log(18 == `18`); // true
*/

// TIP CALCULATOR

const bill = 275;

const tip = bill >= 50 || bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(tip);
