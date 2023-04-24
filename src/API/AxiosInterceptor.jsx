import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actPostTracking } from "../store/global/globalSlice";
import axios from "axios";

const AxiosInterceptor = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Add a request interceptor
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        // Do something before request is sent
        if (config.url.includes("items")) {
          config.url = `${config.url}&fireEvent=true`;
        }
        return config;
      },
      (error) => {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    const responseInterceptor = axios.interceptors.response.use(
      null,
      async (error) => {
        if (!error.config.url.includes("tracking") && !axios.isCancel(error)) {
          dispatch(actPostTracking(error));
        }
        return Promise.reject(error);
      }
    );

    //url -> items -> failed`
    //error handler -> url !==  tracking -> api tracking
    //error handler -> url ? (tracking) skip

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [dispatch]);
  return <div>{children}</div>;
};

export default AxiosInterceptor;
