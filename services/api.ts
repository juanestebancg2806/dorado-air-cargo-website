import axios, { AxiosError } from "axios";

// Create an Axios instance
const api = axios.create({
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
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
