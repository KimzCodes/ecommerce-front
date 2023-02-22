import axios from "axios";

// axios.defaults.baseURL = "http://localhost:5005";
axios.defaults.headers.post["Content-Type"] = "application/json";

//global
// axios.create({
//   baseURL: "https://api.example.com",
//   header: {
//     "Content-Type": "application/json",
//   },
// });

axios.interceptors.request.use(
  function (config) {
    config.baseURL = "http://localhost:5005";
    // Do something before request is sent
    // axios.get("/test");
    console.log(config);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
