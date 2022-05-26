// Flight booking full name function =============================================================================

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

const fullName1 = getFullName('Rostyslav', 'Zhyvitskyi');
const fullName2 = getFullName('Benjamin', 'Hughes');

console.log(fullName1, fullName2);

// Formal full name

const getFullNameFormal = (firstName, lastName, sex, useFormalName) => {
  if (firstName === '' || lastName === '') {
    throw Error('Please make sure you have entered your first and last name');
  }

  if (useFormalName) {
    return sex === 'male'
      ? `Mr. ${firstName} ${lastName}`
      : `Mrs. ${firstName} ${lastName}`;
  } else {
    return `${firstName} ${lastName}`;
  }
};

// Event application ===============================================================================================

const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const getEventWeekday = (remainingDays) => {
  const today = new Date().getDay();

  let dayNumber = today + remainingDays;

  if (dayNumber % 7 === 0) {
    dayNumber = today + (remainingDays % 7);
  } else {
    dayNumber %= 7;
  }

  const weekDay = weekDays[dayNumber - 1];

  console.log(`Party is going to be on ${weekDay} `);
};

getEventWeekday(2);

// Weather wear

const getClothesForTemperature = (temperature) => {
  if (temperature <= 0) {
    return `it's very cold outside, please put a warm jacket on you`;
  } else if (temperature > 0 && temperature <= 10) {
    return `it's cold outside, please put a jacket on you`;
  } else if (temperature > 10 && temperature <= 20) {
    return `it's not so cold outside, but don't forget to put a sweater on you`;
  } else {
    return `it's a good weather, just put a T-shirt on you`;
  }
};

const clothesToWear = getClothesForTemperature(20);

console.log(clothesToWear);

// Student manager

const class22Students = [];

function addStudentToClass(studentName) {
  if (studentName === '') {
    console.log(`Student name can't be empty`);
    return;
  } else if (class22Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
    return;
  } else if (studentName === 'Queen') {
    class22Students.push(studentName);
    console.log('Welcome to the class my Queen');
    return;
  } else if (class22Students.length === 6) {
    console.log('Cannot add more students to class22');
    return;
  }

  class22Students.push(studentName);
}

function getNumberOfStudents(studentList) {
  return studentList.length;
}

addStudentToClass('Natasha');
addStudentToClass('Petro');
addStudentToClass('Natasha');
addStudentToClass('');
addStudentToClass('Jack');
addStudentToClass('Nadia');
addStudentToClass('Søren');
addStudentToClass('Bettina');
addStudentToClass('Benjamin');
addStudentToClass('Queen');

const numberOfStudents = getNumberOfStudents(class22Students);

console.log(class22Students);
console.log(`Total number of students is ${numberOfStudents}`);

// Candy helper

const someAmountInCart = Math.floor(Math.random() * 100);

const boughtCandyPrices = [someAmountInCart];
const amountToSpend = Math.random() * 100;

const canBuyMoreCandy = (priceList, moneyInWallet) => {
  const totalAmount = priceList.reduce((prev, item) => prev + item, 0);

  if (moneyInWallet >= totalAmount) {
    return true;
  } else {
    return false;
  }
};

const addCandy = (candyType, weight) => {
  switch (candyType) {
    case 'sweet':
      boughtCandyPrices.push(0.5 * weight);
      break;
    case 'chocolate':
      boughtCandyPrices.push(0.7 * weight);
      break;
    case 'toffee':
      boughtCandyPrices.push(1.1 * weight);
      break;
    case 'chewing-gum':
      boughtCandyPrices.push(0.03 * weight);
      break;
  }
};

addCandy('chocolate', 30);

canBuyMoreCandy(boughtCandyPrices, amountToSpend)
  ? console.log('You can buy more, so please do!')
  : console.log('Enough candy for you!');
