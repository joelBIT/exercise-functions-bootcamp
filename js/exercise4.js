'use strict';

const restartButton = document.querySelector(".restart");
const computerScoreLabel = document.querySelector(".computer");
const playerScoreLabel = document.querySelector(".you");
const outcomeText = document.querySelector('.outcome');
const playable = document.querySelectorAll('.playable');
const enemyHandImage = document.querySelector('.enemy-hand');

const targetScore = 3;
let playerScore = 0;
let computerScore = 0;
let gameOver = false;

/**
 * Resets the game state.
 */
restartButton.addEventListener('click', () => {
    outcomeText.innerHTML = 'Choose hand shape';

    computerScoreLabel.innerHTML = 'Computer: 0';
    computerScore = 0;
    playerScore = 0;
    gameOver = false;
    enemyHandImage.className = 'enemy-hand';
    outcomeText.innerHTML = 'Choose hand shape';
    outcomeText.classList.remove('win');
    outcomeText.classList.remove('loss');

    for (const hand of playable) {
        hand.classList.remove('disabled');
    }

    playerScoreLabel.innerHTML = 'You: 0';
});

/**
 * Add eventlistener for each hand shape. Computer generates a hand gesture (corresponding number) when you click on
 * a hand gesture. Then your hand gesture is compared to the computer's hand gesture.
 */
for (const hand of playable) {
    hand.addEventListener('click', (event) => {
        if (gameOver) {
            return;
        }

        let enemyHand = Math.floor(Math.random() * 3) + 1;
        setEnemyHandImage(enemyHand);
        let yourHand = getYourHand(event.currentTarget);
        updateScore(yourHand, enemyHand);
        checkIfGameOver();
    });
}

/**
 * 
 * @param {*} targetElement is the figure element that was clicked on.
 * @returns a number corresponding to rock (1), paper (2), and scissors (3)
 */
function getYourHand(targetElement) {
    if (targetElement.classList.contains('paper')) {
        return 2;
    }
    if (targetElement.classList.contains('scissors')) {
        return 3;
    }
    return 1;
}

/**
 * Updates the scoreboard for computer and player.
 * 
 * @param {*} yourHand can be 1 (rock), 2 (paper), 3 (scissors)
 * @param {*} enemyHand can be 1 (rock), 2 (paper), 3 (scissors)
 */
function updateScore(yourHand, enemyHand) {
    if (yourHand === enemyHand) {
        return;
    } else if (yourHand === 1 && enemyHand === 2) {
        computerScore++;
    } else if (yourHand === 2 && enemyHand === 3) {
        computerScore++
    } else if (yourHand === 3 && enemyHand === 1) {
        computerScore++
    } else {
        playerScore++;
    }

    playerScoreLabel.innerHTML = `You: ${playerScore}`;
    computerScoreLabel.innerHTML = `Computer: ${computerScore}`;
}

/**
 * Change computer's hand image.
 * 
 * @param {*} enemyHand number corresponding to Rock, Paper or Scissors.
 */
function setEnemyHandImage(enemyHand) {
    enemyHandImage.className = 'enemy-hand';

    if (enemyHand === 1) {
        enemyHandImage.classList.add('rock');
    } else if (enemyHand === 2) {
        enemyHandImage.classList.add('paper');
    } else {
        enemyHandImage.classList.add('scissors');
    }
}

/**
 * If game is over, disable hands and change color of Game Over text. Red if you lose, green if you win.
 */
function checkIfGameOver() {
    if (playerScore === targetScore || computerScore === targetScore) {
        gameOver = true;
        outcomeText.innerHTML = 'GAME IS OVER';
        for (const hand of playable) {
            hand.classList.add('disabled');
        }

        if (playerScore > computerScore) {
            outcomeText.classList.add('win');
        } else {
            outcomeText.classList.add('loss');
        }
    }
}