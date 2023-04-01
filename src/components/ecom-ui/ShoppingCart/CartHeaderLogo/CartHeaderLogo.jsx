import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { cartTotalQuantity } from "../../../../store/cartSlice";
import { CartDrop } from "../../";
import shoppingCartImg from "../../../../assets/shopping-card.svg";
import styles from "./styles.module.css";

const { shoppingCart, shoppingCartCounter, bumpCart } = styles;

const CartHeaderLogo = () => {
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

  return (
    <div>
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

export default CartHeaderLogo;
