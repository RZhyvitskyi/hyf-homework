// Inputs
const dogYearOfBirthInput = document.getElementById('dog-year-of-birth');
const dogFutureYearInput = document.getElementById('dog-future-year');

// Checkboxes
const dogsYearsSwitcher = document.getElementById('dog-to-human-age');

// Button
const calculateDogYearBtn = document.getElementById('calculate-goodboy-oldboy');

// Result
const dogFutureAgeResult = document.getElementById('dog-future-year-result');

// Errors
const dogBirthYearErrorHandler = document.getElementById('dog-age-error');
const dogFutureYearErrorHandler = document.getElementById('dog-future-error');

calculateDogYearBtn.addEventListener('click', (event) => {
  event.preventDefault();
  dogBirthYearErrorHandler.textContent = '';
  dogFutureYearErrorHandler.textContent = '';
  dogYearOfBirthInput.classList.remove('error-border');
  dogFutureYearInput.classList.remove('error-border');

  const yearOfBirth = dogYearOfBirthInput.value;
  const futureYear = dogFutureYearInput.value;

  if (yearOfBirth === '') {
    dogBirthYearErrorHandler.textContent = `Must be dog's birth year`;
    dogYearOfBirthInput.classList.add('error-border');
    return;
  } else if (futureYear === '') {
    dogFutureYearErrorHandler.textContent = 'Must be future year';
    dogFutureYearInput.classList.add('error-border');
    return;
  }

  let futureAge;

  if (dogsYearsSwitcher.checked) {
    futureAge = (futureYear - yearOfBirth) * 7;
  } else {
    futureAge = futureYear - yearOfBirth;
  }

  dogFutureAgeResult.textContent = `${futureAge} years old`;
  dogFutureAgeResult.classList.add('bump');

  window.setTimeout(() => {
    dogFutureAgeResult.classList.remove('bump');
  }, 300);
});
