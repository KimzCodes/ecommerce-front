import axios from "axios";

axios.defaults.baseURL = "http://localhost:50055";

// Add a request interceptor
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
axios.interceptors.re.use(
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
