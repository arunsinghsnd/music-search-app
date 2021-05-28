import axios from "axios";
import { setAuthHeader } from "./funtions";

export const get = async (url, params) => {
  setAuthHeader();
  const result = await axios.get(url, params);
  return result;
};

export const post = async (url, params) => {
  setAuthHeader();
  const result = await axios.post(url, params);
  return result.data;
};
