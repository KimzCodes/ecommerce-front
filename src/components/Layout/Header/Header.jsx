import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { totalCartQuantity, closeReachToMax } from "../../../state/CartSlice";

import { NavLink } from "react-router-dom";
import { Badge, Alert } from "react-bootstrap";
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
    bumpCard,
    notification,
  } = styles;

  const dispatch = useDispatch();
  const [isAnimateCard, setIsAnimateCard] = useState(false);
  const totalQuantity = useSelector(totalCartQuantity);
  const reachToMax = useSelector((state) => state.cart.reachedToMax);
  const cardClasses = `${shoppingCartCounter} ${isAnimateCard ? bumpCard : ""}`;

  useEffect(() => {
    if (totalQuantity === 0) return;
    setIsAnimateCard(true);
    const debounce = setTimeout(() => {
      setIsAnimateCard(false);
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [totalQuantity]);

  return (
    <header className={header}>
      <div className={headerTop}>
        <h1>
          Our <Badge bg="info">Ecom</Badge>
        </h1>
        <div className={shoppingCard}>
          <img alt="" src={shoppingCardImg} width="30" />
          <div className={cardClasses}>{totalQuantity}</div>
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
      <div className={notification}>
        {reachToMax ? (
          <Alert
            variant="info"
            onClose={() => dispatch(closeReachToMax())}
            dismissible
          >
            <p>Sorry, you reached to maximum limit.</p>
          </Alert>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
