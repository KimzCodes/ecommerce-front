import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartTotalQuantity, closeReachToMax } from "../../../store/cartSlice";

import { NavLink, Link } from "react-router-dom";
import { Badge, Alert } from "react-bootstrap";
import shoppingCartImg from "../../../assets/shopping-card.svg";

import styles from "./styles.module.css";
import { useCallback } from "react";

const Header = () => {
  const {
    shoppingCart,
    shoppingCartCounter,
    headerTop,
    header,
    mainNav,
    secNav,
    activeLink,
    bumpCart,
    notification,
  } = styles;

  const dispatch = useDispatch();
  const [isAnimateCart, setIsAnimateCart] = useState(false);
  const totalQuantity = useSelector(cartTotalQuantity);
  const reachToMax = useSelector((state) => state.cart.reachToMax);
  const cartClasses = `${shoppingCartCounter} ${isAnimateCart ? bumpCart : ""}`;

  const closeReachToMaxHandler = useCallback(() => {
    dispatch(closeReachToMax());
  }, [dispatch]);

  useEffect(() => {
    if (totalQuantity === 0) return;
    setIsAnimateCart(true);
    const debounce = setTimeout(() => {
      setIsAnimateCart(false);
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [totalQuantity]);

  useEffect(() => {
    if (!reachToMax) {
      return;
    }

    const debounce = setTimeout(closeReachToMaxHandler, 3500);
    window.addEventListener("beforeunload", closeReachToMaxHandler);

    return () => {
      clearTimeout(debounce);
      window.addEventListener("beforeunload", closeReachToMaxHandler);
    };
  }, [reachToMax, closeReachToMaxHandler]);

  return (
    <header className={header}>
      <div className={headerTop}>
        <h1>
          Our <Badge bg="info">Ecom</Badge>
        </h1>
        <Link to="shopping-cart">
          <div className={shoppingCart}>
            <img alt="" src={shoppingCartImg} width="30" />
            <div className={cartClasses}>{totalQuantity}</div>
          </div>
        </Link>
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
          <Alert variant="info" onClose={closeReachToMaxHandler} dismissible>
            <p>Sorry, you reached to maximum limit.</p>
          </Alert>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
