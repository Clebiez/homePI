const Koa = require("koa");
const logger = require("koa-morgan");
const Router = require("koa-router");

const cors = require("@koa/cors");

const getCurrentWeather = require("./controller/getCurrentWeather.js");
const getWeeklyOutsideWeather = require("./controller/getWeeklyOutsideWeather.js");

const app = new Koa();
const router = new Router();

router.get("/live", getCurrentWeather);
router.get("/weekly", getWeeklyOutsideWeather);
app.use(logger("tiny")).use(cors()).use(router.routes()).listen(3001);

console.log("Started on 3001 port");
