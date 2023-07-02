import { NavLink } from "react-router-dom";
import { Badge } from "react-bootstrap";

import styles from "./styles.module.css";
import { CartHeaderIcon } from "../../ecom-ui";
import HeaderAuth from "../HeaderAuth/HeaderAuth";

const { headerTop, header, mainNav, activeLink } = styles;

const Header = () => {
  return (
    <header className={header}>
      <div className={headerTop}>
        <h1>
          Our <Badge bg="info">Ecom</Badge>
        </h1>
        <CartHeaderIcon />
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
        <HeaderAuth />
      </nav>
    </header>
  );
};

export default Header;
