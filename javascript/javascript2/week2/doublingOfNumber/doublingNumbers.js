// Doubling of number
const numbersArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];

const getDoubledOddNumbers = (arrayWIthNumbers) => {
  return arrayWIthNumbers
    .filter((number) => number % 2 !== 0)
    .map((number) => number * 2);
};

const doubledOddNumbersArray = getDoubledOddNumbers(numbersArray);

console.log(doubledOddNumbersArray);
