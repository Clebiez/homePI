const getTownCurrentWeather = require("../services/outsideWeather.js")
.getTownCurrentWeather;
const readDHT22 = require("../sensors/dht22/dht22.js");

const getCurrentWeatherData = async (ctx) => {
  try {
    const {data} = await getTownCurrentWeather();

    const inside = await readDHT22();

    ctx.status = 200;
    ctx.body = {
      outside: {
        weather: data.weather,
        main: data.main,
      },
      inside,
    };
  } catch (e) {
    console.error(e);
    ctx.status = 400;
  }
};

module.exports = getCurrentWeatherData;
