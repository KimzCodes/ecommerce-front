import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actLogin, actRegister, resetUIState } from "../store/auth/authSlice";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, actType } = useSelector((state) => state.auth);

  const login = (values, nav = "/") => {
    dispatch(actLogin(values))
      .unwrap()
      .then(() => navigate(nav));
  };

  const register = (values, nav = "/") => {
    dispatch(actRegister(values))
      .unwrap()
      .then(() => navigate(nav));
  };

  const resetUI = useCallback(() => {
    dispatch(resetUIState());
  }, [dispatch]);

  return { loading, error, actType, login, register, resetUI };
};

export default useAuth;
