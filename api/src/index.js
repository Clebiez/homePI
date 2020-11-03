const Koa = require("koa");
const logger = require("koa-morgan");
const Router = require("koa-router");

const cron = require("node-cron");

const cors = require("@koa/cors");
const Sequelize = require("sequelize").Sequelize;

const getCurrentWeather = require("./controller/getCurrentWeather.js");
const getInstantHomeWeather = require("./controller/getInstantHomeWeather.js");
const getWeeklyOutsideWeather = require("./controller/getWeeklyOutsideWeather.js");
const readAndSaveIndoor = require("./controller/readAndSaveIndoor.js");
const {parsed} = require("dotenv").config();

const sequelize = new Sequelize(
  `postgres://${parsed.POSTGRES_USER}:${parsed.POSTGRES_PASSWORD}@localhost:5432/${parsed.POSTGRES_DB}`
);

const app = new Koa();
const router = new Router();

router.get("/live", getCurrentWeather);
router.get("/instant-home", getInstantHomeWeather);
router.get("/weekly", getWeeklyOutsideWeather);
app.use(logger("tiny")).use(cors()).use(router.routes()).listen(3001);

cron.schedule("0 * * * *", readAndSaveIndoor);

console.log("Started on 3001 port");

async function init() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

init();
