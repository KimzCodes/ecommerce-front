import { useEffect } from "react";
import axios from "axios";

const AxiosInterceptor = ({ children }) => {
  useEffect(() => {
    //response
    const interceptor = axios.interceptors.response.use(
      async (response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data

        return response;
      },
      async (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        try {
          if (error.config.url.indexOf("test") > -1) {
            return Promise.reject(error);
          } else {
            await axios.get("http://localhost:5005/test");
            return Promise.reject(error);
          }
        } catch (error) {
          console.log(error);
          return Promise.reject(error);
        }
      }
    );

    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, []);
  return <>{children}</>;
};

export default AxiosInterceptor;
