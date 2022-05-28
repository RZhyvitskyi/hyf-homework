// Some calculation for homework

const realPriceForPeterHouse = 8 * 10 * 10 * 2.5 * 1000 + 100 * 300;
const realPriceForJuliaHouse = 5 * 11 * 8 * 2.5 * 1000 + 70 * 300;

const peterPaid = 2500000;
const juliaPaid = 1000000;

if (realPriceForPeterHouse > peterPaid) {
  console.log(
    `Peter have made a good deal, and saved ${
      realPriceForPeterHouse - peterPaid
    }`
  );
} else {
  console.log(
    `It was a bad deal for Peter, he has lost ${
      peterPaid - realPriceForPeterHouse
    }`
  );
}

if (realPriceForJuliaHouse > juliaPaid) {
  console.log(
    `Julia have made a good deal, and saved ${
      realPriceForJuliaHouse - juliaPaid
    }`
  );
} else {
  console.log(
    `It was a bad deal for Julia, she has lost ${
      juliaPaid - realPriceForJuliaHouse
    }`
  );
}

// My extra task

// Inputs
const houseWidthInput = document.getElementById('house-width');
const houseHeightInput = document.getElementById('house-height');
const houseDepthInput = document.getElementById('house-depth');
const gardenSizeInput = document.getElementById('garden-size');

// Button
const calculateHousePrice = document.getElementById('calculate-house');

// Result
const houseWorthyResult = document.getElementById('worthy-result');

// Errors
const widthErrorHandler = document.getElementById('width-error');
const heightErrorHandler = document.getElementById('height-error');
const depthErrorHandler = document.getElementById('depth-error');
const gardenErrorHandler = document.getElementById('garden-error');

calculateHousePrice.addEventListener('click', (event) => {
  event.preventDefault();
  widthErrorHandler.textContent = '';
  heightErrorHandler.textContent = '';
  depthErrorHandler.textContent = '';
  gardenErrorHandler.textContent = '';

  houseWidthInput.classList.remove('error-border');
  houseHeightInput.classList.remove('error-border');
  houseDepthInput.classList.remove('error-border');
  gardenSizeInput.classList.remove('error-border');

  const houseWidth = houseWidthInput.value;
  const houseHeight = houseHeightInput.value;
  const houseDepth = houseDepthInput.value;
  const gardenSize = gardenSizeInput.value;

  if (houseWidth === '') {
    widthErrorHandler.textContent = `House width expected`;
    houseWidthInput.classList.add('error-border');
    return;
  } else if (houseHeight === '') {
    heightErrorHandler.textContent = 'House height expected';
    houseHeightInput.classList.add('error-border');
    return;
  } else if (houseDepth === '') {
    depthErrorHandler.textContent = 'House depth expected';
    houseDepthInput.classList.add('error-border');
    return;
  } else if (gardenSize === '') {
    gardenErrorHandler.textContent = 'Garden size expected';
    gardenSizeInput.classList.add('error-border');
    return;
  }

  const housePrice =
    houseWidth * houseHeight * houseDepth * 2.5 * 1000 + gardenSize * 300;

  houseWorthyResult.textContent = `${housePrice}`;
  houseWorthyResult.classList.add('bump');

  window.setTimeout(() => {
    houseWorthyResult.classList.remove('bump');
  }, 300);
});
