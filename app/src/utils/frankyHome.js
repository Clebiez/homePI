import axios from "axios";

const instance = axios.create({
  baseURL: process.env.FRANKYHOME_API_URL,
});
export const getLive = () => {
  return instance
    .get(`/live`);
};