const findNameBtn = document.getElementById('find-name');
const nameResult = document.getElementById('name-result');

const namesList = [
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

findNameBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const randomNumber = Math.floor(Math.random() * 10);

  nameResult.textContent = ` "${namesList[randomNumber]}" contains ${namesList[randomNumber].length} characters`;
  nameResult.classList.add('bump');

  window.setTimeout(() => {
    nameResult.classList.remove('bump');
  }, 300);
});
