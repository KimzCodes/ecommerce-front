import axios from "axios";

axios.defaults.baseURL = "http://localhost:5005";
axios.defaults.headers.post["Content-Type"] = "application/json";

//global
// axios.create({
//   baseURL: "https://api.example.com",
//   header: {
//     "Content-Type": "application/json",
//   },
// });

// Add a response interceptor
// axios.interceptors.response.use(
//   (response) => {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   },
//   async (error) => {
//     try {
//       if (error.config.url.includes("tracking")) {
//         return Promise.reject(error);
//       } else {
//         await axios.post("http://localhost:5005/tracking", {
//           message: error.message,
//           endPoint: error.config.url,
//         });
//         return Promise.reject(error);
//       }
//     } catch (error) {
//       console.log(error);
//       return Promise.reject(error);
//     }
//   }
// );
