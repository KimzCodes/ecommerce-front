import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { cartTotalQuantity } from "../../../../store/cartSlice";
import shoppingCartImg from "../../../../assets/shopping-cart.svg";
import styles from "./styles.module.css";

const { shoppingCart, shoppingCartCounter, pumpCart } = styles;

const CartHeaderIcon = () => {
  //init -> define -> useEffect (skip) -> render -> useEffect -> return (send to memory)
  //re evaluate -> skip useEffect -> render -> execute return (clear set time from memory) -> useEffect -> return (send to memory)
  //re evaluate -> skip useEffect -> render -> execute return -> useEffect -> return (send to memory)
  const [isAnimate, setIsAnimate] = useState(false);
  const totalQuantity = useSelector(cartTotalQuantity);
  const cartClass = `${shoppingCartCounter} ${isAnimate ? pumpCart : ""}`;

  useEffect(() => {
    if (totalQuantity === 0) return;
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
