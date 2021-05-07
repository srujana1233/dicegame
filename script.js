'use strict';

const player0E1 = document.querySelector('.player--0');
const player1E1 = document.querySelector('.player--1');

const score0E1 = document.querySelector('#score--0');
const score1E1 = document.querySelector('#score--1');

const currentScore0E1 = document.querySelector('#current--0');
const currentScore1E1 = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


//Rolling Button
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
diceEl.classList.add('hidden');

score0E1.textContent = 0;
score1E1.textContent = 0;
currentScore0E1.textContent = 0;
currentScore1E1.textContent = 0;

btnRoll.addEventListener('click', () => {
    //1.Rolling Dice
    const dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice);
    //2.Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3.Checked for rolled 1
    if (dice !== 1) {
        //add the score to current
        currentScore += dice;
        //currentScore0E1.textContent = currentScore;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        //change the player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0E1.classList.toggle('player--active');
        player1E1.classList.toggle('player--active');

    }

});

btnHold.addEventListener('click', () => {
    //1.Add current scor to Active Player's Permanent Score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`.textContent) = scores[activePlayer];
    //2. Check if Player's Permanent Score >=100
    if (scores[activePlayer] >= 100) {
        //finish game
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    } else {
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0E1.classList.toggle('player--active');
        player1E1.classList.toggle('player--active');


    }

});