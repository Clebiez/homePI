const readDHT22 = require("./dht22.js");

const run = async () => {
  try {
    const data = await readDHT22();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

run();