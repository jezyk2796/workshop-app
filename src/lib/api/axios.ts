import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "/api", // src -> app -> api
  headers: {
    "Content-Type": "application/json",
  },
});
