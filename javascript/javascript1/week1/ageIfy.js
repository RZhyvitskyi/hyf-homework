const yearOfBirthInput = document.getElementById('year-of-birth');
const futureYearInput = document.getElementById('future-year');
const calculateYearBtn = document.getElementById('calculate-age-ify');
const futureAgeResult = document.getElementById('future-year-result');

calculateYearBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const yearOfBirth = yearOfBirthInput.value;
  const futureYear = futureYearInput.value;

  const futureAge = futureYear - yearOfBirth;

  futureAgeResult.textContent = `${futureAge} years old`;
  futureAgeResult.classList.add('bump');

  window.setTimeout(() => {
    futureAgeResult.classList.remove('bump');
  }, 300);
});
