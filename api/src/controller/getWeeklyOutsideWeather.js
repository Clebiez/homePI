const getTownOneCallWeather = require("../services/outsideWeather.js")
  .getTownOneCallWeather;

const getWeeklyOutsideWeather = async (ctx) => {
  try {
    const {data} = await getTownOneCallWeather();
    ctx.status = 200;
    ctx.body = data.list;
  } catch (e) {
    console.error(e);
    ctx.status = 400;
  }
};

module.exports = getWeeklyOutsideWeather;