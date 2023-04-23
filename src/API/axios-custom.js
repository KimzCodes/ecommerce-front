import axios from "axios";

const catAPI = axios.create({
  baseURL: "http://localhost:5005",
  header: {
    "Content-Type": "application/json",
  },
});

export { catAPI };
