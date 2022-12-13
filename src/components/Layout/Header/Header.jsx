import { useSelector } from "react-redux";
import { totalCartQuantity } from "../../../state/CartSlice";

import { NavLink } from "react-router-dom";
import { Badge } from "react-bootstrap";
import shoppingCardImg from "../../../assets/shopping-card.svg";

import styles from "./styles.module.css";

const Header = () => {
  const {
    shoppingCard,
    shoppingCartCounter,
    headerTop,
    header,
    mainNav,
    secNav,
    activeLink,
  } = styles;

  const totalQuantity = useSelector(totalCartQuantity);

  return (
    <header className={header}>
      <div className={headerTop}>
        <h1>
          Our <Badge bg="info">Ecom</Badge>
        </h1>
        <div className={shoppingCard}>
          <img alt="" src={shoppingCardImg} width="30" />
          <div className={shoppingCartCounter}>{totalQuantity}</div>
        </div>
      </div>

      <nav>
        <ul className={mainNav}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categories"
              className={({ isActive }) => (isActive ? activeLink : undefined)}
            >
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-collections"
              className={({ isActive }) => (isActive ? activeLink : undefined)}
            >
              New Collections
            </NavLink>
          </li>
        </ul>
        <ul className={secNav}>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
