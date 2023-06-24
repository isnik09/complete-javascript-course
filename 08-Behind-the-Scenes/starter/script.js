'use strict';

const firstName = 'NIK';

function calcAge(birthYear) {
  const age = 2023 - birthYear;
  function printAge() {
    const output = `Your are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();
  return age;
}

calcAge(2001);
