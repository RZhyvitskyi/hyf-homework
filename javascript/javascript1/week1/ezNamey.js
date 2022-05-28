const findNameBtn = document.getElementById('find-name');
const nameResult = document.getElementById('name-result');

const firstWords = [
  'crazy',
  'happy',
  'GetTo',
  'yellow',
  'here',
  'solution',
  'predictive',
  'make',
  'take',
  'build',
];

const secondWords = [
  'earth',
  'black',
  'water',
  'run',
  'camera',
  'creative',
  'future',
  'blue',
  'they',
  'stranger',
];

findNameBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const randomFirstNumber = Math.floor(Math.random() * 10);
  const randomSecondNumber = Math.floor(Math.random() * 10);

  const startupName = `${firstWords[randomFirstNumber]} ${secondWords[randomSecondNumber]}`;

  nameResult.textContent = ` "${startupName}" contains ${
    startupName.length - 1
  } characters`;
  nameResult.classList.add('bump');

  window.setTimeout(() => {
    nameResult.classList.remove('bump');
  }, 300);
});
