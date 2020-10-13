import {getTownCurrentWeather} from "../services/outsideWeather.js";

const getCurrentWeatherData = async (ctx) => {
  try {
    const {data} = await getTownCurrentWeather();

    //** GET LAST INDOOR CALL */
    console.log(data);
    ctx.status = 200;
    ctx.body = {
      outside: {
        weather: data.weather,
        main: data.main,
      },
    };
  } catch (e) {
    console.error(e);
    ctx.status = 400;
  }
};

export default getCurrentWeatherData;
