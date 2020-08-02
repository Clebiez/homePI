const Koa = require("koa");
const logger = require("koa-morgan");
const Router = require("koa-router");
const bodyParser = require("koa-body")();
const app = new Koa();
const cors = require("@koa/cors");
const PythonShell = require("python-shell").PythonShell;

const router = new Router();

const readDHT22 = () => {
  return new Promise((resolve, reject) => {
    const options = {
      mode: "text",
      pythonPath: "/usr/bin/python3",
      pythonOptions: ["-u"],
      scriptPath: __dirname,
    };
    PythonShell.run("./sensors/dht22.py", options, function (err, result) {
      if (!err && result && Array.isArray(result)) {
        const data = JSON.parse(result[0]);
        resolve(data);
      } else {
        reject("Python script not working...");
      }
    });
  });
};

router.get("/live", async (ctx) => {
  try {
    const data = await readDHT22();

    temp = data.temperature.toFixed(1);
    humidity = data.humidity.toFixed(1);
    ctx.status = 200;
    ctx.body = {
      temp: temp,
      humidity: humidity,
    };
  } catch (e) {
    console.log('Live preview is not available')
    ctx.status = 400;
  }
});

app.use(logger("tiny")).use(cors()).use(router.routes()).listen(3001);
