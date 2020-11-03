const dotenv = require("dotenv");
const config = dotenv.config();

const PythonShell = require("python-shell").PythonShell;

const executePythonScript = () => {
  return new Promise((resolve, reject) => {
    const options = {
      mode: "text",
      pythonPath: "/usr/bin/python3",
      pythonOptions: ["-u"],
      scriptPath: __dirname,
    };
    PythonShell.run("./dht22.py", options, function (err, result) {
      if (!err && result && Array.isArray(result)) {
        const data = JSON.parse(result[0]);
        resolve({
          temperature: data.temperature ? data.temperature.toFixed(1) : null,
          humidity: data.humidity ? data.humidity.toFixed(1) : null,
        });
      } else {
        reject(err);
      }
    });
  });
};

const readDHT22 = () => {
  if (config.parsed.FAKE_DHT22 === true) {
    return new Promise((resolve, reject) => {
      resolve({
        temperature: Math.floor(Math.random() * 30),
        humidity: Math.floor(Math.random() * 101),
      });
    });
  }
  const recursiveCall = async (numberOfTries = 0) => {
    try {
      const data = await executePythonScript();
      if (data.temperature && data.humidity) {
        return data;
      } else {
        throw new Error('Data is null');
      }
    } catch {
      if (numberOfTries < 10) {
        return recursiveCall(numberOfTries + 1);
      } else {
        return undefined;
      }
    }
  }

  return recursiveCall();
};

module.exports = readDHT22;
