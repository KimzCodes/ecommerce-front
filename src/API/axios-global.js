import axios from "axios";

axios.defaults.baseURL = "http://localhost:5005";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    if (config.url.includes("items")) {
      config.url = `${config.url}&fireEvent=true`;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(null, async (error) => {
  if (!error.config.url.includes("tracking") && !axios.isCancel(error)) {
    await axios.post("http://localhost:5006/tracking", {
      message: error.message,
      endPoint: error.config.url,
    });
  }

  return Promise.reject(error);
});
