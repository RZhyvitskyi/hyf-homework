// Movies exercise -------------------------------------------------
const getDataFromApi = async () => {
  const apiUrl =
    'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';

  const requestData = await fetch(apiUrl);
  const data = await requestData.json();

  const badMoviesArray = data.filter((movie) => movie.rating < 5);
  const badMoviesAfterYearArray = badMoviesArray.filter(
    (movie) => movie.year >= 2000
  );

  console.log(badMoviesAfterYearArray);
};

getDataFromApi();

// Promise that resolves after set time ----------------------------
const returnPromiseAfterTime = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time * 1000));
};

returnPromiseAfterTime(3).then(() =>
  console.log('Promise was resolved after your time')
);

(async () => {
  await returnPromiseAfterTime(5);
  console.log('Promise was resolved after your time');
})();

// Rewrite time ----------------------------------------------

const getPromisedPosition = () => {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
};

getPromisedPosition()
  .then((pos) => console.log(pos))
  .catch((err) => console.log(err));

// Fetching and waiting ---------------------------------------

// Promises variant
setTimeout(() => {
  const apiUrl =
    'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => console.log(data));
}, 3000);

// Async/await variant
(async () => {
  await returnPromiseAfterTime(3);

  const apiUrl =
    'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';

  const requestData = await fetch(apiUrl);
  const data = await requestData.json();

  console.log(data);
})();
