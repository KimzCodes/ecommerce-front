import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { cartTotalQuantity } from "../../../../store/cartSlice";
import shoppingCartImg from "../../../../assets/shopping-cart.svg";
import styles from "./styles.module.css";

const { shoppingCart, shoppingCartCounter, pumpCart } = styles;

const CartHeaderIcon = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const totalQuantity = useSelector(cartTotalQuantity);

  const cartClass = `${shoppingCartCounter} ${isAnimate ? pumpCart : ""}`;

  useEffect(() => {
    if (totalQuantity === 0) {
      return;
    }
    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [totalQuantity]);

  return (
    <div className={shoppingCart}>
      <img alt="" src={shoppingCartImg} width="30" />
      <div className={cartClass}>{totalQuantity}</div>
    </div>
  );
};

export default CartHeaderIcon;
