import axios from "axios";

export const api = axios.create({
  // baseURL: "http://localhost:3001/",
  baseURL: "https://team2-omae.onrender.com/",
  headers: { "Content-Type": "application/json" },
});
