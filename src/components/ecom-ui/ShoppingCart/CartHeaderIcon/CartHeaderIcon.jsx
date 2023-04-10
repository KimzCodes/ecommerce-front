import { useEffect, useState, useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import { cartTotalQuantity } from "../../../../store/cart/cartSlice";
import { CartDrop } from "../..";

import { ReactComponent as ReactLogo } from "../../../../assets/shopping-cart/logo.svg";
import styles from "./styles.module.css";

const CartHeaderIcon = () => {
  const { shoppingCart, shoppingCartCounter, bumpCart } = styles;
  const divEl = useRef();
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
    setOpenCartDrop(false);
  }, []);

  useEffect(() => {
    if (!openCartDrop) return;

    const handler = (event) => {
      if (!divEl.current.contains(event.target)) {
        closeCartDrop();
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [closeCartDrop, openCartDrop]);

  return (
    <div id="shopping-cart-icon" ref={divEl}>
      <div
        className={shoppingCart}
        onClick={() => setOpenCartDrop((prev) => !prev)}
      >
        <ReactLogo />
        <div className={cartClasses}>{totalQuantity}</div>
      </div>
      {openCartDrop ? <CartDrop close={closeCartDrop} /> : null}
    </div>
  );
};

export default CartHeaderIcon;
