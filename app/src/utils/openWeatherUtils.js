import axios from "axios";

const apiKey = "21cf543abd3708ace79a7c8b183edc0e";

export const getTownCurrentWeather = () => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=49.1858&lon=-0.3591&appid=${apiKey}&units=metric`
  );
};

export const getTownOneCallWeather = () => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=49.1858&lon=-0.3591&appid=${apiKey}&units=metric`
  );
};
