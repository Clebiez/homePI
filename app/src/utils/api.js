import axios from "axios";

const PI_HOME_LOCAL_IP = process.env.REACT_APP_API_URL;
console.log("RASPBERRY IP", PI_HOME_LOCAL_IP);
const instance = axios.create({
  baseURL: PI_HOME_LOCAL_IP,
});

export const getLive = () => {
  return instance.get(`/live`);
};

export const getWeekly = () => {
  return instance.get(`/weekly`);
};
