import axios from "axios";

const authService = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: process.env.NEXT_PUBLIC_AUTH_URL,
  withCredentials: true,
  timeout: 30000,
});

export default authService;
