const weatherTemplate = (weatherData) => {
  const sunrise = {
    hours: ('0' + new Date(weatherData.sys.sunrise * 1000).getHours()).slice(
      -2
    ),
    minutes: (
      '0' + new Date(weatherData.sys.sunrise * 1000).getMinutes()
    ).slice(-2),
  };

  const sunset = {
    hours: ('0' + new Date(weatherData.sys.sunset * 1000).getHours()).slice(-2),
    minutes: ('0' + new Date(weatherData.sys.sunset * 1000).getMinutes()).slice(
      -2
    ),
  };

  const temperatureCelsius = (weatherData.main.temp - 273.15).toFixed(1);

  return `<div class="weather-wrapper">
      <div class="weather-content">
        <div class="temperature-wrapper">
          <div class="weather-icon">
            <img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" alt="" />
          </div>
          <span id="temperature" class="temperature">${temperatureCelsius}</span>
          <div class="measuring">
            <input id="temp-c-${weatherData.id}" type="radio" class="temperature-system" name="temperature" checked />
            <label for="temp-c-${weatherData.id}" id="label-c-${weatherData.id}" class="temperature-label checked">C</label> 
            <input id="temp-f-${weatherData.id}" type="radio" class="temperature-system" name="temperature" />
            <label for="temp-f-${weatherData.id}" id="label-f-${weatherData.id}" class="temperature-label">F</label> 
          </div>
        </div>
        <div class="searched-city">
          <h3>${weatherData.name}</h3>
        </div>
        <div class="more-info">
          <div class="wind df align-items-c gap">
            <img src="./img/icons/wind.png" alt="" class="icon" />
            <span>wind speed: ${weatherData.wind.speed}</span>
          </div>
          <div class="cloudy df align-items-c gap">
            <img src="./img/icons/clouds.png" alt="" class="icon" />
            <span>${weatherData.weather[0].description}</span>
          </div>
          <div class="sun-rise df align-items-c gap">
            <img src="./img/icons/sunrise.png" alt="" class="icon" />
            <span>sunrise time: ${sunrise.hours}.${sunrise.minutes}</span>
          </div>
          <div class="sun-set df align-items-c gap">
            <img src="./img/icons/sunset.png" alt="" class="icon" />
            <span>sunset time: ${sunset.hours}.${sunset.minutes}</span>
          </div>
        </div>
        <div id="map" class="map"></div>
      </div>
    </div>`;
};

export default weatherTemplate;
