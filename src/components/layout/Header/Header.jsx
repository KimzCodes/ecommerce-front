import { Badge } from "react-bootstrap";
import shoppingCartImg from "../../../assets/shopping-cart.svg";

import styles from "./styles.module.css";

const Header = () => {
  const {
    shoppingCart,
    shoppingCartCounter,
    headerTop,
    header,
    mainNav,
    secNav,
    activeLink,
  } = styles;
  return (
    <header className={header}>
      <div className={headerTop}>
        <h1>
          Our <Badge bg="info">Ecom</Badge>
        </h1>
        <div className={shoppingCart}>
          <img alt="" src={shoppingCartImg} width="30" />
          <div className={shoppingCartCounter}>0</div>
        </div>
      </div>

      <nav>
        <ul className={mainNav}>
          <li>
            <a href="/" className={activeLink}>
              Home
            </a>
          </li>
          <li>
            <a href="/">Shopping</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
        </ul>
        <ul className={secNav}>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/">Register</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
