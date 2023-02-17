import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { cartTotalQuantity } from "../../../store/cartSlice";
import { CartDrop } from "../../ecom-ui";
import shoppingCartImg from "../../../assets/shopping-card.svg";
import styles from "./styles.module.css";

const HeaderShoppingCart = () => {
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

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setOpenCartDrop(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.addEventListener("click", handler, true);
    };
  }, []);

  return (
    <div id="shopping-cart-logo" ref={divEl}>
      <div
        className={shoppingCart}
        onClick={() => setOpenCartDrop((prev) => !prev)}
      >
        <img alt="" src={shoppingCartImg} width="30" />
        <div className={cartClasses}>{totalQuantity}</div>
      </div>
      {openCartDrop ? <CartDrop /> : null}
    </div>
  );
};

export default HeaderShoppingCart;
