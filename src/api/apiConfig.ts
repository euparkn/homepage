import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = "/proxy";

export const API = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    "Content-Type": `application/json`,
    "Access-Control-Allow-Origin": "*",
  },
});
