import axios, { AxiosError } from "axios";

// Create an Axios instance
/**
 * Axios instance for making HTTP requests.
 */
const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    console.error(`[Error] ${error.response?.status} - ${error.config?.url}`);

    return Promise.reject(error);
  }
);

export default api;
