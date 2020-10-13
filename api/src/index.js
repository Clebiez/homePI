import Koa from "koa";
import logger from "koa-morgan";
import Router from "koa-router";

import cron from 'node-cron';

import cors from "@koa/cors";


import getCurrentWeather from "./controller/getCurrentWeather.js";
import getWeeklyOutsideWeather from "./controller/getWeeklyOutsideWeather.js";
import readAndSaveIndoor from "./controller/readAndSaveIndoor.js";

const app = new Koa();
const router = new Router();

router.get("/live", getCurrentWeather);
router.get("/weekly", getWeeklyOutsideWeather);
app.use(logger("tiny")).use(cors()).use(router.routes()).listen(3001);

cron.schedule("0 * * * *", readAndSaveIndoor);

console.log("Started on 3001 port");