import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const { authNav } = styles;

const HeaderAuth = () => {
  return (
    <ul className={authNav}>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </ul>
  );
};

export default HeaderAuth;
