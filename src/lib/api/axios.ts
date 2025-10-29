import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "/api", // src -> app -> api
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Include cookies in requests (e.g. JWT)
});
