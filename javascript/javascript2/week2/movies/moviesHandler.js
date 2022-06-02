// Working with movies
import { movies } from './movies.js';

// 1.
const shortTitleMoviesArray = movies.map((movie) =>
  movie.title
    .split(' ')
    .map((title) => title[0])
    .join(' ')
);

// 2.
const longTitleMoviesArray = movies.map((movie) => movie.title);

// 3.
const moviesFromEightiesArray = movies.reduce(
  (prev, movie) =>
    (movie.year >= 1980) & (movie.year <= 1989) ? prev + 1 : prev,
  0
);

// 4.
const moviesArrayWithRatingKey = movies.map((movie) => {
  let tag;

  if (movie.rating >= 7) {
    tag = 'Good';
  } else if (movie.rating >= 4) {
    tag = 'Average';
  } else if (movie.rating < 4) {
    tag = 'Bad';
  }

  return { ...movie, tag };
});

// 5.
const filteredRatingMoviesArray = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);

// 6.
const keyWordsArray = ['Surfer', 'Alien', 'Benjamin'];

const totalNumberOfMoviesWithKeyWords = movies.reduce((prev, movie) => {
  const titleLowerCase = movie.title.toLowerCase();
  const keyWordsToLowerCase = keyWordsArray.map((word) => word.toLowerCase());

  if (keyWordsToLowerCase.some((key) => titleLowerCase.includes(key))) {
    return prev + 1;
  } else {
    return prev;
  }
}, 0);

// 7. A bit mind blowing solution, maybe I can find better.
const moviesArrayWithDuplicatedWords = movies.filter((movie) => {
  const titleWordsArray = movie.title.toLowerCase().split(' ');

  const totalDuplicatesInOneMovie = titleWordsArray.reduce((prev, word) => {
    const amountOfDuplicateWords = titleWordsArray.filter(
      (key) => key === word
    );

    if (amountOfDuplicateWords.length > 1) {
      return prev + 1;
    } else {
      return prev;
    }
  }, 0);

  if (totalDuplicatesInOneMovie > 1) {
    return true;
  } else {
    return false;
  }
});

// 8.
const averageRating =
  movies.reduce((prev, movie) => prev + movie.rating, 0) / movies.length;

// 9.
const totalNumberOfMoviesByRatingKey = moviesArrayWithRatingKey.reduce(
  (prev, movie) => {
    if (movie.tag === 'Good') {
      return { ...prev, goodMovies: ++prev.goodMovies };
    } else if (movie.tag === 'Average') {
      return { ...prev, averageMovies: ++prev.averageMovies };
    } else if (movie.tag === 'Bad') {
      return { ...prev, badMovies: ++prev.badMovies };
    } else {
      return `There is no movie with rating key`;
    }
  },
  { goodMovies: 0, averageMovies: 0, badMovies: 0 }
);
