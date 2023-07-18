import { Link, NavLink } from "react-router-dom";
import { Badge } from "react-bootstrap";
import shoppingCartImg from "../../../assets/shopping-cart.svg";

import styles from "./styles.module.css";

const {
  shoppingCart,
  shoppingCartCounter,
  headerTop,
  header,
  mainNav,
  secNav,
  activeLink,
  headerLogo,
} = styles;

const Header = () => {
  return (
    <header className={header}>
      <div className={headerTop}>
        <Link to="/" className={headerLogo}>
          <h1>
            Our <Badge bg="info">Ecom</Badge>
          </h1>
        </Link>

        <div className={shoppingCart}>
          <img alt="" src={shoppingCartImg} width="30" />
          <div className={shoppingCartCounter}>0</div>
        </div>
      </div>

      <nav>
        <ul className={mainNav}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : "")}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-collections"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              New collections
            </NavLink>
          </li>
        </ul>
        <ul className={secNav}>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              Register
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
