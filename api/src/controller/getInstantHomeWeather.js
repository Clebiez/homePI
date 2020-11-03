const readDHT22 = require("../sensors/dht22/dht22.js");

const getInstantHomeWeather = async (ctx) => {
  try {
    const data = await readDHT22();
    ctx.status = 200;
    ctx.body = data;
  } catch (e) {
    console.error(e);
    ctx.status = 400;
    ctx.body = e;
  }
};

module.exports = getInstantHomeWeather;
