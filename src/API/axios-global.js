import axios from "axios";

axios.defaults.baseURL = "http://localhost:50055";

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async (error) => {
    await axios.post("http://localhost:5006/tracking", {
      message: error.message,
      endPoint: error.config.url,
    });
    if (!error.config.url.includes("tracking") && !axios.isCancel(error)) {
    }

    return Promise.reject(error);
  }
);
