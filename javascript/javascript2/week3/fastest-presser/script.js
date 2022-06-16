const durationInput = document.getElementById('game-duration');
const startBtn = document.getElementById('game-start');
const playerOneField = document.getElementById('player-one');
const playerTwoField = document.getElementById('player-two');
const winner = document.getElementById('winner');
const countDown = document.getElementById('time-count-down');
const errorField = document.getElementById('error');

let keySPressedAmount = 0;
let keyLPressedAmount = 0;

const renderPoints = (keyS, keyL) => {
  playerOneField.textContent = '';
  playerTwoField.textContent = '';

  playerOneField.textContent = keyS;
  playerTwoField.textContent = keyL;
};

const keyboardListener = (e) => {
  console.log('hello');

  if (e.code === 'KeyS') {
    keySPressedAmount++;
  } else if (e.code === 'KeyL') {
    keyLPressedAmount++;
  }

  renderPoints(keySPressedAmount, keyLPressedAmount);
};

let counter;

const makeAfterTimeout = () => {
  window.removeEventListener('keyup', keyboardListener);
  if (keySPressedAmount > keyLPressedAmount) {
    winner.textContent = `Winner Left`;
  } else if (keySPressedAmount < keyLPressedAmount) {
    winner.textContent = `Winner Right`;
  } else if (!keySPressedAmount && !keyLPressedAmount) {
    winner.textContent = `None of the players press any key`;
  } else {
    winner.textContent = `It's a draw!`;
  }

  keySPressedAmount = 0;
  keyLPressedAmount = 0;
};

const countDownTimer = (duration) => {
  let gameDuration = duration - 1;

  countDown.classList.add('active');
  countDown.textContent = `${duration}`;

  counter = window.setInterval(() => {
    countDown.textContent = `${gameDuration}`;
    --gameDuration;

    if (gameDuration < 0) {
      countDown.textContent = '0';
      clearInterval(counter);
      makeAfterTimeout();
    }
  }, 1000);
};

startBtn.addEventListener('click', () => {
  const gameDuration = durationInput.value;

  playerOneField.textContent = '';
  playerTwoField.textContent = '';
  winner.textContent = '';
  errorField.textContent = '';

  clearInterval(counter); // To prevent multiple Start Game!

  keySPressedAmount = 0; // To prevent multiple Start Game!
  keyLPressedAmount = 0; // To prevent multiple Start Game!

  if (!gameDuration) {
    return (errorField.textContent =
      'Please enter the game duration in seconds, maximum is 10 seconds');
  } else if (gameDuration > 10 || gameDuration <= 0) {
    return (errorField.textContent =
      'Game duration cannot be greater than 10 seconds or less than 1 second');
  }

  countDownTimer(gameDuration);
  window.addEventListener('keyup', keyboardListener);
});
