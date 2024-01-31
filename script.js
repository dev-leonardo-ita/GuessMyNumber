'use strict';

let score = 20;
let highscore = 0;

//Number randomizer function
let secretNumber = Math.trunc(Math.random() * 20) + 1; ;

// Displayed message function
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    
    //When there is no number
    if(!guess) {
       displayMessage('🛑 No number');
    } 
    //When player wins
    else if(guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    //when guess is wrong (Too high or too low)
    } else if (guess !== secretNumber){
        if(score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--
            document.querySelector('.score').textContent = score;
        } else {
           displayMessage('🔥 You lost the game!');
           document.querySelector('body').style.backgroundColor = '#e03131';
            document.querySelector('.score').textContent = 0;
        }
    }
});
// Again button press
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('number').style.width = '15rem';
});

document.querySelector('.startBtn').addEventListener('click', function(){
    document.querySelector('.firstPage').style.display = 'none';
    document.querySelector('main').style.display = 'flex';
    document.querySelector('header').style.display = 'flex';
});