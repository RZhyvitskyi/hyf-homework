import weatherTemplate from './js/templates/weatherTemplate.js';
import renderMap from './js/components/map.js';
import noDataTemplate from './js/templates/noDataTemplate.js';

const cityInput = document.getElementById('city');
const cityBtn = document.getElementById('city-btn');
const output = document.getElementById('api-output');
const locationWEatherOutput = document.getElementById('location-weather');
const lastLocationWeatherOutput = document.getElementById(
  'last-location-weather'
);

const renderWeatherData = (weatherData, output) => {
  output.innerHTML = weatherTemplate(weatherData);
  renderMap(weatherData.coord.lat, weatherData.coord.lon);
};

const changeMeasuringSystem = (apiData) => {
  const celsiusRadio = document.getElementById(`temp-c-${apiData.id}`);
  const fahrenheitRadio = document.getElementById(`temp-f-${apiData.id}`);
  const celsiusLabel = document.getElementById(`label-c-${apiData.id}`);
  const fahrenheitLabel = document.getElementById(`label-f-${apiData.id}`);
  const temperature = document.getElementById(`temperature`);

  celsiusRadio.addEventListener('change', () => {
    celsiusLabel.classList.remove('checked');
    fahrenheitLabel.classList.remove('checked');

    if (celsiusRadio.checked) {
      celsiusLabel.classList.add('checked');
      temperature.innerHTML = `${(apiData.main.temp - 273.15).toFixed(1)}`;
    }
  });

  fahrenheitRadio.addEventListener('change', () => {
    fahrenheitLabel.classList.remove('checked');
    celsiusLabel.classList.remove('checked');

    if (fahrenheitRadio.checked) {
      fahrenheitLabel.classList.add('checked');
      temperature.innerHTML = `${(
        ((apiData.main.temp - 273.15) * 9) / 5 +
        32
      ).toFixed(1)}`;
    }
  });
};

const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const renderCurrentPositionWeather = async () => {
  try {
    const { coords } = await getCurrentPosition();
    // const coords = {
    //   latitude: 50.450001,
    //   longitude: 30.523333,
    // };

    const apiUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${coords.latitude}&lon=${coords.longitude}&limit=1&appid=57640a906412f62664b0e76848661320`;
    const apiResponse = await fetch(apiUrl);
    const cityName = await apiResponse.json();

    const apiCityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName[0].name}&appid=57640a906412f62664b0e76848661320`;
    const apiCityResponse = await fetch(apiCityUrl);
    const apiData = await apiCityResponse.json();

    if (apiData.cod !== 200) {
      throw new Error();
    }

    localStorage.setItem('weather', JSON.stringify({ ...apiData, id: 1000 }));

    renderWeatherData(apiData, locationWEatherOutput);
    changeMeasuringSystem(apiData);
  } catch (error) {
    locationWEatherOutput.innerHTML = noDataTemplate(
      'There is no weather data about your current location'
    );
  }
};

const renderLastLocationWeather = () => {
  const localStorageWeather = JSON.parse(localStorage.getItem('weather'));

  if (localStorageWeather) {
    renderWeatherData(localStorageWeather, lastLocationWeatherOutput);
    changeMeasuringSystem(localStorageWeather);
  } else {
    lastLocationWeatherOutput.innerHTML = noDataTemplate(
      'There is no weather data about your last location or search'
    );
  }
};

const btnListenerHandler = async () => {
  output.innerHTML = '';
  const cityName = cityInput.value.trim().toLowerCase();

  if (!cityName) {
    return (output.innerHTML = `<p class='error'>Please enter a city name</p>`);
  }

  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=57640a906412f62664b0e76848661320`;
    const apiResponse = await fetch(apiUrl);
    const apiData = await apiResponse.json();

    if (apiData.cod !== 200) {
      throw new Error();
    }

    localStorage.setItem('weather', JSON.stringify({ ...apiData, id: 1000 })); //To avoid id repeating

    renderWeatherData(apiData, output);
    changeMeasuringSystem(apiData);
  } catch (error) {
    output.innerHTML = noDataTemplate(
      `There is no information about city: ${cityName}`
    );
  }
};

window.addEventListener('load', () => {
  renderLastLocationWeather();
  renderCurrentPositionWeather();
});

cityBtn.addEventListener('click', btnListenerHandler);
