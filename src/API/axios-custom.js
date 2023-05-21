import axios from "axios";

const customAPI = axios.create({
  baseURL: "http://localhost:5005",
  header: {
    "Content-Type": "application/json",
  },
});

export { customAPI };
