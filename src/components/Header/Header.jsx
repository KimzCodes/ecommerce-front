import { Badge } from "react-bootstrap";
import shoppingCardImg from "../../assets/shopping-card.svg";

import styles from "./header.module.css";

const Header = () => {
  const {
    shoppingCard,
    shoppingCartCounter,
    headerTop,
    header,
    mainNav,
    secNav,
  } = styles;
  return (
    <header className={header}>
      <div className={headerTop}>
        <h1>
          Our <Badge bg="info">Ecom</Badge>
        </h1>
        <div className={shoppingCard}>
          <img alt="" src={shoppingCardImg} width="30" />
          <div className={shoppingCartCounter}>0</div>
        </div>
      </div>

      <nav>
        <ul className={mainNav}>
          <li>
            <a href="/">Home</a>
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
