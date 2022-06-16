// Find the shortest word =============================================================

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

const findShortestWord = (listOfWords) => {
  return listOfWords.reduce(
    (prev, current) => (current.length < prev.length ? current : prev),
    listOfWords[0]
  );
};

console.log(findShortestWord(danishWords));

// Find and count the Danish letters ================================================

const danishString = 'Jeg har en blå bil';
const danishString2 = 'Blå grød med røde bær';
const danishLetters = ['æ', 'ø', 'å'];

const findDanishLetters = (stringWithWords) => {
  const arrayOfLetters = stringWithWords.split(' ').join('').split('');

  if (danishLetters.some((letter) => arrayOfLetters.includes(letter))) {
    const firstLetter = arrayOfLetters.reduce(
      (prev, letter) => (letter === 'æ' ? prev + 1 : prev),
      0
    );
    const secondLetter = arrayOfLetters.reduce(
      (prev, letter) => (letter === 'ø' ? prev + 1 : prev),
      0
    );
    const thirdLetter = arrayOfLetters.reduce(
      (prev, letter) => (letter === 'å' ? prev + 1 : prev),
      0
    );

    return {
      total: firstLetter + secondLetter + thirdLetter,
      ...(firstLetter && { æ: firstLetter }),
      ...(secondLetter && { ø: secondLetter }),
      ...(thirdLetter && { å: thirdLetter }),
    };
  }
};

console.log(findDanishLetters(danishString));
console.log(findDanishLetters(danishString2));

// Spirit animal name generator ===================================================
const btn = document.getElementById('btn-spirit-generator');
const userNameInput = document.getElementById('user-name');
const userNameWithSpirit = document.getElementById('user-name-animal');
const errorHandler = document.getElementById('error-handler');

// Event type
const onHover = document.getElementById('input-hover');
const nameTyping = document.getElementById('text-type');
const onBtnClick = document.getElementById('button-click');

const spiritAnimalList = [
  'Funny bear',
  'Scary monkey',
  'Just a dog',
  'Big dog',
  'Large dog',
  'Cat is Cat',
  'Eagle from the desert',
  'Cow with points',
  'Pocket elephant',
  'White shark',
];

// Name generator function

const spiritAnimalNameGenerator = () => {
  userNameWithSpirit.textContent = '';
  errorHandler.textContent = '';
  const userName = userNameInput.value;

  if (!userName) {
    errorHandler.textContent = 'Please enter a user name';
    return;
  }

  const randomIndex = Math.floor(Math.random() * spiritAnimalList.length);
  userNameWithSpirit.textContent = `${userName} - ${spiritAnimalList[randomIndex]}`;
};

// Listeners

btn.addEventListener('click', () => {
  if (!onHover.checked && !nameTyping.checked && !onBtnClick.checked) {
    userNameWithSpirit.textContent = '';
    errorHandler.textContent = '';
    errorHandler.textContent =
      'Please choose one or more of the event type above';
  } else {
    errorHandler.textContent = '';
  }
});

onHover.addEventListener('change', () => {
  onHover.checked
    ? userNameInput.addEventListener('mouseover', spiritAnimalNameGenerator)
    : userNameInput.removeEventListener('mouseover', spiritAnimalNameGenerator);
});

nameTyping.addEventListener('change', () => {
  nameTyping.checked
    ? userNameInput.addEventListener('keyup', spiritAnimalNameGenerator)
    : userNameInput.removeEventListener('keyup', spiritAnimalNameGenerator);
});

onBtnClick.addEventListener('change', () => {
  onBtnClick.checked
    ? btn.addEventListener('click', spiritAnimalNameGenerator)
    : btn.removeEventListener('click', spiritAnimalNameGenerator);
});

// hyfBay - get the okay'est products here ===========================================================
console.log('Script loaded');

const products = getAvailableProducts();
console.log(products);

const root = document.getElementById('hyfBayHelpers');
const renderListTemplate = (listItem) => {
  return `<li class="card">
    <h3>${listItem.name}</h3>
    <p>price: ${listItem.price}</p>
    <p>rating: ${listItem.rating}</p>
  </li>`;
};

products.forEach((item) => {
  root.insertAdjacentHTML('afterbegin', renderListTemplate(item));
});
