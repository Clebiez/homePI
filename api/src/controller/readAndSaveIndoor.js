import {readDHT22} from "../sensors/dht22/dht22.js";

const readAndSaveDHT22 = async () => {
  const data = await readDHT22();
  console.log("Recorded:", data);
  // TODO : SAVE INTO DB
};

export default readAndSaveDHT22;