const yearOfBirthInput = document.getElementById('year-of-birth');
const futureYearInput = document.getElementById('future-year');
const calculateYearBtn = document.getElementById('calculate-age-ify');
const futureAgeResult = document.getElementById('future-year-result');
const birthYearErrorHandler = document.getElementById('age-error');
const futureYearErrorHandler = document.getElementById('future-error');

calculateYearBtn.addEventListener('click', (event) => {
  event.preventDefault();
  birthYearErrorHandler.textContent = '';
  futureYearErrorHandler.textContent = '';
  yearOfBirthInput.classList.remove('error-border');
  futureYearInput.classList.remove('error-border');

  const yearOfBirth = yearOfBirthInput.value;
  const futureYear = futureYearInput.value;

  console.log(yearOfBirth, futureYear);

  if (yearOfBirth === '') {
    birthYearErrorHandler.textContent = 'Please enter your real birth year';
    yearOfBirthInput.classList.add('error-border');
    return;
  } else if (futureYear === '') {
    futureYearErrorHandler.textContent = 'Please enter future year';
    futureYearInput.classList.add('error-border');
    return;
  }

  const futureAge = futureYear - yearOfBirth;

  futureAgeResult.textContent = `${futureAge} years old`;
  futureAgeResult.classList.add('bump');

  window.setTimeout(() => {
    futureAgeResult.classList.remove('bump');
  }, 300);
});
