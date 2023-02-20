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
