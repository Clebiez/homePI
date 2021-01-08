const getTownCurrentWeather = require("../services/outsideWeather.js")
  .getTownCurrentWeather;
const HomeData = require("../models/").HomeData;

const getCurrentWeatherData = async (ctx) => {
  try {
    const {data} = await getTownCurrentWeather();
    const results = await HomeData.findAll({
      limit: 1,
      order: [["createdAt", "DESC"]],
    });

    const inside = results && results.length === 1 ? results[0].dataValues : null;
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