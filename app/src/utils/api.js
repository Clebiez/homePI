import axios from "axios";
import {PI_HOME_LOCAL_IP} from "../../env.config";

const instance = axios.create({
  baseURL: PI_HOME_LOCAL_IP,
});

export const getLive = () => {
  return instance.get(`/live`);
};

export const getWeekly = () => {
  return instance.get(`/weekly`);
};