import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actLogin,
  actRegister,
  resetUIState,
  logout as logoutUser,
  actUpdateAccount,
} from "../store/auth/authSlice";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    loading,
    error,
    actType,
    accessToken,
    user: userInfo,
  } = useSelector((state) => state.auth);

  const login = (values, nav = "/") => {
    dispatch(actLogin(values))
      .unwrap()
      .then(() => navigate(nav));
  };

  const logout = (nav = "") => {
    dispatch(logoutUser());
    if (nav) {
      navigate(nav);
    }
  };

  const register = (values, nav = "/") => {
    dispatch(actRegister(values))
      .unwrap()
      .then(() => navigate(nav));
  };

  const updateAccount = (values) => {
    dispatch(actUpdateAccount(values))
      .unwrap()
      .then(() => {})
      .catch((error) => {
        if (error === "jwt expired") {
          logout("/login?message=session_expired");
        }
      });
  };

  const resetUI = useCallback(() => {
    dispatch(resetUIState());
  }, [dispatch]);

  return {
    loading,
    error,
    actType,
    login,
    register,
    updateAccount,
    logout,
    resetUI,
    accessToken,
    userInfo,
  };
};

export default useAuth;
