import axios, { AxiosError } from "axios";

// Create an Axios instance
const api = axios.create({
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
  },
});

// Optional: Add response interceptor for logging errors
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.error(`[Error] ${error.response?.status} - ${error.config?.url}`);
    return Promise.reject(error);
  }
);

export default api;
