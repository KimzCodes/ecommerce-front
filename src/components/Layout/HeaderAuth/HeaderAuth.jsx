import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/use-auth";

import styles from "./styles.module.css";

const { authNav } = styles;

const HeaderAuth = () => {
  const { accessToken, userInfo, logout } = useAuth();
  return (
    <ul className={authNav}>
      {accessToken && Object.keys(userInfo).length > 0 && userInfo?.email ? (
        <>
          <li>
            <NavLink to="/profile">welcome: {userInfo?.firstName}</NavLink>
          </li>
          <li style={{ color: "white" }}>/</li>
          <li>
            <button type="button" onClick={() => logout("/")}>
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default HeaderAuth;
