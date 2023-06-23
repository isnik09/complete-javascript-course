'use strict';

// VARIABLES...
let score = 20;
let highScore = 0;
let randomNumber;
let userGuess;

// RANDOM NUMBER GENERATOR
const randomNumberGenerator = function () {
  randomNumber = Math.ceil(Math.random() * 20);
};

// DISPLAY MESSAGE
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// COLOUR CHANGER
const colourChanger = function (colour) {
  document.querySelector('body').style.backgroundColor = colour;
};

// CHECK FOR USER INPUT
const checkUserGuess = function () {
  userGuess = document.querySelector('.guess').value;

  if (!userGuess) {
    displayMessage('No input');
  } else if (userGuess == randomNumber) {
    document.querySelector('.number').textContent = randomNumber;
    displayMessage('Correct!!!');
    colourChanger('#60b347');
    highScoreChecker();
  } else if (userGuess > randomNumber) {
    displayMessage('Too high');
  } else {
    displayMessage('Too low');
  }
  document.querySelector('.score').textContent = score;
  if (score == 0) {
    restartGame();
  }
  score--;
};

// CHECK FOR HIGHSCORE
const highScoreChecker = function () {
  if (highScore < score) {
    highScore = score;
    document.querySelector('.highscore').textContent = score;
  }
};

// RESTART THE GAME
const restartGame = function () {
  document.querySelector('.number').textContent = '?';
  colourChanger('#222');
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  randomNumberGenerator();
};

// GAME WILL START FROM HERE...
randomNumberGenerator();
document.querySelector('.check').addEventListener('click', checkUserGuess);
document.querySelector('.again').addEventListener('click', restartGame);
