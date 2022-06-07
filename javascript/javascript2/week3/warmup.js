const btn = document.getElementById('btn');
const btnLocation = document.getElementById('btn-location');
const contentWrapper = document.getElementById('root');

// 1.

window.setTimeout(() => console.log('Called after 2.5 seconds'), 2500);

// 2.
let timeout;

const logStringWithDelay = (delay, stringToLog) => {
  if (typeof delay !== 'number') {
    console.log('First argument must be a number in seconds');
  } else if (typeof stringToLog !== 'string') {
    console.log('Second argument must be a string');
  }

  const delayInSeconds = delay * 1000;

  clearTimeout(timeout);

  timeout = window.setTimeout(() => {
    console.log(stringToLog);
  }, delayInSeconds);
};

// 3.
btn.addEventListener('click', () => {
  logStringWithDelay(5, 'This string logged after 5 seconds');
});

// 4.
const logEarth = () => console.log('Earth');

const logSaturn = () => console.log('Saturn');

const planetLogFunction = (fn) =>
  typeof fn === 'function' ? fn() : console.log('Argument must be a function');

planetLogFunction(logEarth);
planetLogFunction(logSaturn);

// 5.

let latitude;
let longitude;
let errorMessage;

const renderPositionCoords = (coordsLatitude, coordsLongitude) => {
  if (
    typeof coordsLatitude !== 'number' &&
    typeof coordsLongitude !== 'number'
  ) {
    console.log('Latitude and longitude must be numbers');
    return;
  }

  contentWrapper.innerHTML = '';
  contentWrapper.insertAdjacentHTML(
    'afterbegin',
    `<p>This is the latitude: ${coordsLatitude}</p>
     <p>This is the longitude: ${coordsLongitude}</p>`
  );
};

const renderLocationError = (error) => {
  if (typeof error !== 'string') {
    console.log('Error must be a string');
    return;
  }

  contentWrapper.innerHTML = '';
  contentWrapper.insertAdjacentHTML('afterbegin', `<p>${error}</p>`);
};

const getCoords = () => {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      latitude = pos.coords.latitude;
      longitude = pos.coords.longitude;
    },
    (error) => {
      errorMessage = error.message;
    }
  );
};

getCoords();

btnLocation.addEventListener('click', () => {
  latitude && longitude
    ? renderPositionCoords(latitude, longitude)
    : renderLocationError(errorMessage);
});

// 6.
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: latitude, lng: +longitude },
    zoom: 8,
  });

  let marker = new google.maps.Marker({
    position: { lat: latitude, lng: longitude },
    map: map,
  });
}

window.initMap = initMap;

// 7.
const runAfterDelay = (delay, callback) => {
  if (!delay || !callback) {
    console.log('Please enter a delay and a callback');
  } else if (typeof delay === 'number' && typeof callback === 'function') {
    window.setTimeout(callback, delay);
  } else {
    console.log(
      `Please make sure that first argument is a number (ms) and second is a function `
    );
  }
};

runAfterDelay(2000, logEarth);

// 8.
window.addEventListener('dblclick', () => {
  console.log('double click!');
});

// 9.
const showFunnyJoke = () => {
  console.log('Where are average things manufactured? The satisfactory.');
};

const showBadJoke = () => {
  console.log('My dog stepped on a bee');
};

const jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => {
  if (shouldTellFunnyJoke === undefined || !logFunnyJoke || !logBadJoke) {
    console.log('Please enter 3 parameters');
  } else if (
    typeof shouldTellFunnyJoke !== 'boolean' &&
    typeof logFunnyJoke !== 'function' &&
    typeof logBadJoke !== 'function'
  ) {
    console.log(
      'First parameter must be a boolean, second and third are functions'
    );
  } else if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
};

jokeCreator(false, showFunnyJoke, showBadJoke);
