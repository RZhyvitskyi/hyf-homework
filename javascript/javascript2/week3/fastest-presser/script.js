const durationInput = document.getElementById('game-duration');
const startBtn = document.getElementById('game-start');
const playerOneField = document.getElementById('player-one');
const playerTwoField = document.getElementById('player-two');

let keySPressedAmount = 0;
let KeyLPressedAmount = 0;

const keyboardListener = (e) => {
  if (e.code === 'KeyS') {
    keySPressedAmount++;
  } else if (e.code === 'KeyL') {
    KeyLPressedAmount++;
  }

  console.log(keySPressedAmount);
  console.log(KeyLPressedAmount);
};

startBtn.addEventListener('click', () => {
  const gameDuration = durationInput.value;

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
  }, gameDuration * 1000);
});
