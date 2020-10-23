const dotenv = require("dotenv");
const config = dotenv.config();

const PythonShell = require("python-shell").PythonShell;

const path = require('path');

const readDHT22 = () => {
  if (config.parsed.FAKE_DHT22) {
    return new Promise((resolve, reject) => {
      resolve({
        temperature: Math.floor(Math.random() * 30),
        humidity: Math.floor(Math.random() * 101),
      });
    });
  }

  return new Promise((resolve, reject) => {
    const options = {
      mode: "text",
      pythonPath: "/usr/bin/python3",
      pythonOptions: ["-u"],
      scriptPath: path.resolve(),
    };
    PythonShell.run("./dht22.py", options, function (err, result) {
      if (!err && result && Array.isArray(result)) {
        const data = JSON.parse(result[0]);
        resolve({
          temperature: data.temperature.toFixed(1),
          humidity: data.humidity.toFixed(1),
        });
      } else {
        reject("Python script not working...");
      }
    });
  });
};

module.exports = readDHT22;