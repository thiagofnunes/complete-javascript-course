'use strict';

console.log(document.querySelector('.message').textContent);

console.log(document.querySelector('.check'));

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreCounter = 0;
updateScore();

function updateScore() {
    document.querySelector('.score').textContent = String(scoreCounter);
    document.querySelector('.highscore').textContent = String(scoreCounter);
}

document.querySelector('.check').addEventListener('click',
    function () {
        document.querySelector('.number').textContent = '?';
        document.querySelector('body').style.backgroundColor = '#222'
        const userGuess = Number(document.querySelector('.guess').value);
        console.log(userGuess);
        if (!userGuess) {
            document.querySelector('.message').textContent = 'Start guessing...'
        } else if (userGuess === secretNumber) {
            document.querySelector('.message').textContent = 'Correct Number 😁';
            scoreCounter++;
            updateScore();
            document.querySelector('body').style.backgroundColor = '#60b347'
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNumber;
        } else if (userGuess < secretNumber) {
            document.querySelector('.message').textContent = 'No, too low, try again. 😔';
        } else if (userGuess > secretNumber) {
            document.querySelector('.message').textContent = 'No, too high, try again. 😔';
        }
    });

document.querySelector('.btn-again').addEventListener('click',
    function () {
        scoreCounter = 0;
        updateScore();
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.guess').value = '';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.number').style.width = '15rem'
        document.querySelector('body').style.backgroundColor = '#222';
    });