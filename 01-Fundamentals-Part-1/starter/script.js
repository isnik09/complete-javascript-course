// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1 Store Mark's and John's mass and height in variables
// Calculate both their BMIs using the formula (you can even implement both
// versions)
// 2 Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
//
// Test data:
//
//  Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
//
//  Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

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
