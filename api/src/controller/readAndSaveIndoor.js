const readDHT22 = require("../sensors/dht22/dht22.js");
const HomeData = require('../models/').HomeData;

const readAndSaveDHT22 = async () => {
  const data = await readDHT22();
  console.log("Recorded home :", data);
  try {
    await HomeData.create(data);
    console.log('Saved !');
  } catch(e) {
    console.log(e);
  }
};

module.exports = readAndSaveDHT22;