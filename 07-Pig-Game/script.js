"use strict";

const newGameBtn = document.querySelector(".btn--new");
const rollDiceBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const diceImg = document.querySelector(".dice");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");

let currentScore0 = 0;
let playerScore0 = 0;

let currentScore1 = 0;
let playerScore1 = 0;

let isPlayer0 = true;

const playerSwitcher = function () {
  if (isPlayer0) {
    changeBackgroundForPlayer();
    isPlayer0 = !isPlayer0;
  } else {
    changeBackgroundForPlayer();
    isPlayer0 = true;
  }
};

const changeBackgroundForPlayer = function () {
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
const setCurrentScoreToZero = function () {
  currentScore0 = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  currentScore1 = 0;
};

const setPlayerScoreToZero = function () {
  score0.textContent = 0;
  playerScore0 = 0;
  playerScore1 = 0;
  score1.textContent = 0;
};

// ROLL THE DICE AND SHOW IMAGE
const diceRoll = function () {
  diceImg.style.display = "block";
  const diceScore = Math.ceil(Math.random(6) * 6);
  diceImg.src = `dice-${diceScore}.png`;
  checkForOne(Number(diceScore));
  return diceScore;
};

// RESTART THE GAME
const restartGame = function () {
  setCurrentScoreToZero();
  setPlayerScoreToZero();
  // changeBackgroundForPlayer()
  diceImg.style.display = "none";
};

// HOLD THE SCORE
const holdScore = function () {
  console.log(currentScore0);
  if (isPlayer0) {
    console.log(isPlayer0);
    playerScore0 += currentScore0;
    score0.textContent = playerScore0;
  } else {
    console.log(isPlayer0);
    playerScore1 += currentScore1;
    score1.textContent = playerScore1;
  }
  playerSwitcher();
  setCurrentScoreToZero();
};

const checkForOne = function (diceScore) {
  if (diceScore === 1) {
    if (isPlayer0) {
      currentScore0 = 0;
      current0.textContent = currentScore0;
    } else {
      currentScore1 = 0;
      current1.textContent = currentScore1;
    }
    playerSwitcher();
  } else {
    if (isPlayer0) {
      currentScore0 += diceScore;
      current0.textContent = currentScore0;
    } else {
      currentScore1 += diceScore;
      current1.textContent = currentScore1;
    }
  }
};

rollDiceBtn.addEventListener("click", diceRoll);
newGameBtn.addEventListener("click", restartGame);
holdBtn.addEventListener("click", holdScore);

restartGame();

/*

'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
*/
