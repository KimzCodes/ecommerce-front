import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { tracking } from "../store/global/globalSlice";
import axios from "axios";

const AxiosInterceptor = ({ children }) => {
  const dispatch = useDispatch();

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
            dispatch(tracking(error));
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
  }, [dispatch]);
  return <div>{children}</div>;
};

export default AxiosInterceptor;
