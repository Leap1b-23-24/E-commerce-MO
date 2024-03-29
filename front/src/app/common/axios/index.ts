import axios from "axios";

export const api = axios.create({
  baseURL: "https://team2-omae-l4w8.onrender.com",
  headers: { "Content-Type": "application/json" },
});
