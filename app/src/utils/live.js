import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.0.18:3001",
});

export const getLive = () => {
  return instance.get(`/live`);
};
