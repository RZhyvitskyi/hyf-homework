const testWeather = {
  coord: { lon: -0.1257, lat: 51.5085 },
  weather: [
    {
      id: 802,
      main: 'Clouds',
      description: 'scattered clouds',
      icon: '03d',
    },
  ],
  base: 'stations',
  main: {
    temp: 293.5,
    feels_like: 292.79,
    temp_min: 291.64,
    temp_max: 294.85,
    pressure: 1024,
    humidity: 46,
  },
  visibility: 10000,
  wind: { speed: 2.06, deg: 310 },
  clouds: { all: 29 },
  dt: 1655142455,
  sys: {
    type: 2,
    id: 2019646,
    country: 'GB',
    sunrise: 1655091788,
    sunset: 1655151485,
  },
  timezone: 3600,
  id: 2643743,
  name: 'London',
  cod: 200,
};

export default testWeather;
