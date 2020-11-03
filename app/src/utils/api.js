import axios from "axios";
import Constants from "expo-constants";

const PI_HOME_LOCAL_IP = Constants.manifest.extra.API_URL;
const instance = axios.create({
  baseURL: PI_HOME_LOCAL_IP,
});

export const getLive = () => {
  return instance.get(`/live`);
};

export const getWeekly = () => {
  return instance.get(`/weekly`);
};