'use strict';

const topScorePlayer1 = document.querySelector('.score--0');
const currentScorePlayer1 = document.querySelector('.current--0');
const topScorePlayer2 = document.querySelector('.score--1');
const currentScorePlayer2 = document.querySelector('.current--1');

const diceImage = document.querySelector('.dice');

const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--new');
const holdScoreBtn = document.querySelector('.btn--new');

let scorePlayer1 = 0;
let scorePlayer2 = 0;
let currentPlayer = 0;

function restartCounters() {
    topScorePlayer1.textContent = '0';
    topScorePlayer2.textContent = '0';
    diceImage.classList.add('hidden');
    scorePlayer1 = 0;
    scorePlayer2 = 0;
}

function rollDice() {
    let diceValue = Math.trunc(Math.random() * 6) + 1;
    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${diceValue}.png`;

    if (diceValue === 1) {
        switchPlayer();
    }
}

function switchPlayer() {
    currentPlayer = currentPlayer === 0 ? 1 : 2;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

}

newGameBtn.addEventListener('click', restartCounters);