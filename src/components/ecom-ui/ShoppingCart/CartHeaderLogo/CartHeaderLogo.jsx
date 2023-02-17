import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { cartTotalQuantity } from "../../../../store/cartSlice";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import shoppingCartImg from "../../../../assets/shopping-card.svg";

const CartHeaderLogo = () => {
  const { shoppingCart, shoppingCartCounter, bumpCart } = styles;

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
    <Link to="shopping-cart">
      <div className={shoppingCart}>
        <img alt="" src={shoppingCartImg} width="30" />
        <div className={cartClasses}>{totalQuantity}</div>
      </div>
    </Link>
  );
};

export default CartHeaderLogo;
