import axios from "axios";

axios.defaults.baseURL = "http://localhost:50055";
axios.defaults.headers.post["Content-Type"] = "application/json";

//global
// axios.create({
//   baseURL: "https://api.example.com",
//   header: {
//     "Content-Type": "application/json",
//   },
// });

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
    if (!error.config.url.includes("/tracking")) {
      axios.post("http://localhost:50055/tracking", {
        data: { type: "response", status: "failed" },
      });
    }
    return Promise.reject(error);
  }
);
