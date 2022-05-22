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
