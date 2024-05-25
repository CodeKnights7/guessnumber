'use strict';
let getnumber = () => Math.trunc(Math.random() * 20) + 1;
let number = getnumber();

console.log(number);

let score = 0;
let highscore = 0;

document.querySelector('.score').textContent = score;

const check = document
  .querySelector('.check')
  .addEventListener('click', function () {
    const result = Number(document.querySelector('.guess').value); // Convert to number
    if (result === number) {
      document.querySelector('.message').textContent =
        'Yeah!.. You are Right in guessing number🎉✔';
      document.querySelector('.number').textContent = number; // Show number only if guessed correctly
      score += 1;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      document.querySelector('.score').textContent = score;
    } else if (result > number) {
      document.querySelector('.message').textContent =
        'Too high!📈... Try again🦾';
      document.querySelector('.score').textContent = score; // Keep the current score displayed
      score = 0; // Reset the score to zero only if there is a mismatch
    } else if (result < number) {
      document.querySelector('.message').textContent =
        'Too low!📉... Try again🦾';
      document.querySelector('.score').textContent = score; // Keep the current score displayed
      score = 0; // Reset the score to zero only if there is a mismatch
    }
  });

const reset = () => {
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
  number = getnumber();
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 0; // Reset the score display to zero for a new game
  score = 0; // Reset the current score
  console.log(number);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.again').addEventListener('click', reset);
