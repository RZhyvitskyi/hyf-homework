const durationInput = document.getElementById('game-duration');
const startBtn = document.getElementById('game-start');
const playerOneField = document.getElementById('player-one');
const playerTwoField = document.getElementById('player-two');
const winner = document.getElementById('winner');

let keySPressedAmount = 0;
let keyLPressedAmount = 0;

const renderPoints = (keyS, keyL) => {
  playerOneField.textContent = '';
  playerTwoField.textContent = '';

  playerOneField.textContent = keyS;
  playerTwoField.textContent = keyL;
};

const keyboardListener = (e) => {
  if (e.code === 'KeyS') {
    keySPressedAmount++;
  } else if (e.code === 'KeyL') {
    keyLPressedAmount++;
  }

  renderPoints(keySPressedAmount, keyLPressedAmount);
};

startBtn.addEventListener('click', () => {
  const gameDuration = durationInput.value;

  playerOneField.textContent = '';
  playerTwoField.textContent = '';

  if (!gameDuration) {
    return console.log(
      'Please enter the game duration in seconds, maximum is 10 seconds'
    );
  } else if (gameDuration > 10 || gameDuration <= 0) {
    return console.log(
      'Game duration cannot be greater than 10 seconds or less than 1 second'
    );
  }

  window.addEventListener('keyup', keyboardListener);

  window.setTimeout(() => {
    window.removeEventListener('keyup', keyboardListener);
    if (keySPressedAmount > keyLPressedAmount) {
      winner.textContent = `Winner Left`;
    } else {
      winner.textContent = `Winner Right`;
    }

    keySPressedAmount = 0;
    keyLPressedAmount = 0;
  }, gameDuration * 1000);
});
