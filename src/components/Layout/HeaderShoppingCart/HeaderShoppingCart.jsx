import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { cartTotalQuantity } from "../../../store/cartSlice";
import { CartDrop } from "../../ecom-ui";
import shoppingCartImg from "../../../assets/shopping-card.svg";
import styles from "./styles.module.css";

const HeaderShoppingCart = () => {
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

  useEffect(() => {
    const cartDrop = document.getElementById("cartDrop");

    document.body.addEventListener("click", function (event) {
      if (cartDrop.contains(event.target)) {
        console.log("inside");
      } else {
        console.log("outside");
      }
    });
  }, []);

  return (
    <div>
      <div className={shoppingCart}>
        <img alt="" src={shoppingCartImg} width="30" />
        <div className={cartClasses}>{totalQuantity}</div>
      </div>
      <CartDrop />
    </div>
  );
};

export default HeaderShoppingCart;
