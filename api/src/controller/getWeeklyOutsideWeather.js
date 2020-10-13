import {getTownOneCallWeather} from '../services/outsideWeather.js';

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

export default getWeeklyOutsideWeather;