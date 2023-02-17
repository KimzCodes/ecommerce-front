import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { cartTotalQuantity } from "../../../../store/cartSlice";
import { CartDrop } from "../..";

import shoppingCartImg from "../../../../assets/shopping-card.svg";
import styles from "./styles.module.css";

const CartHeaderLogo = () => {
  const { shoppingCart, shoppingCartCounter, bumpCart } = styles;

  const [openCartDrop, setOpenCartDrop] = useState(false);
  const [isAnimateCart, setIsAnimateCart] = useState(false);
  const totalQuantity = useSelector(cartTotalQuantity);

  const cartClasses = `${shoppingCartCounter} ${isAnimateCart ? bumpCart : ""}`;

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

  const closeCartDrop = useCallback(() => {
    setOpenCartDrop((prev) => !prev);
  }, []);

  return (
    <div id="shopping-cart-logo">
      <div className={shoppingCart} onClick={closeCartDrop}>
        <img alt="" src={shoppingCartImg} width="30" />
        <div className={cartClasses}>{totalQuantity}</div>
      </div>
      {openCartDrop ? <CartDrop close={closeCartDrop} /> : null}
    </div>
  );
};

export default CartHeaderLogo;
