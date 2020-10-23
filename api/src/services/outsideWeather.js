const axios = require("axios");
const dotenv = require("dotenv");

const apiKey = dotenv.config().parsed.OPEN_WEATHER_API_KEY;

const getTownCurrentWeather = () => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=49.1858&lon=-0.3591&appid=${apiKey}&units=metric`
  );
};

const getTownOneCallWeather = () => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/forecast/daily?lat=49.1858&lon=-0.3591&appid=${apiKey}&units=metric`
  );
};

module.exports = {
  getTownCurrentWeather,
  getTownOneCallWeather,
};