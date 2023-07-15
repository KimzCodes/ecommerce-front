import { cloneElement } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/use-auth";

const GuestRoute = ({ children }) => {
  const { loading, error, actType, accessToken, login, register, resetUI } =
    useAuth();

  const cloneChildren = cloneElement(children, {
    loading,
    error,
    actType,
    accessToken,
    resetUI,
    login,
    register,
  });

  if (accessToken) {
    return <Navigate to="/" replace={true} />;
  }
  return <>{cloneChildren}</>;
};

export default GuestRoute;
