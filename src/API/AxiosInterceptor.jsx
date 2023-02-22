import { useEffect } from "react";
import axios from "axios";
const AxiosInterceptor = ({ children }) => {
  console.log("S");
  useEffect(() => {
    const myInterceptor = axios.interceptors.response.use(
      (response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },
      async (error) => {
        try {
          if (error.config.url.includes("tracking")) {
            return Promise.reject(error);
          } else {
            await axios.post("http://localhost:5005/tracking", {
              message: error.message,
              endPoint: error.config.url,
            });
            return Promise.reject(error);
          }
        } catch (error) {
          console.log(error);
          return Promise.reject(error);
        }
      }
    );

    return () => {
      axios.interceptors.request.eject(myInterceptor);
    };
  }, []);
  return <div>{children}</div>;
};

export default AxiosInterceptor;
