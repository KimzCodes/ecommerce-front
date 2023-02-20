import axios from "axios";

const customAPI = axios.create({
  baseURL: "http://localhost:5005",
  header: {
    "Content-Type": "application/json",
  },
});

customAPI.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("cat");
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export { customAPI };
