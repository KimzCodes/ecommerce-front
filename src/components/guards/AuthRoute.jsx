import { cloneElement } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/use-auth";

const AuthRoute = ({ children }) => {
  const {
    loading,
    error,
    actType,
    accessToken,
    userInfo,
    updateAccount,
    resetUI,
  } = useAuth();

  const cloneChildren = cloneElement(children, {
    loading,
    error,
    actType,
    accessToken,
    userInfo,
    resetUI,
    updateAccount,
  });

  if (!accessToken) {
    return <Navigate to="/login?message=login_required" replace={true} />;
  }
  return <>{cloneChildren}</>;
};

export default AuthRoute;
