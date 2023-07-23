import { useSelector } from "react-redux";
import { cartTotalQuantity } from "../../../../store/cartSlice";
import shoppingCartImg from "../../../../assets/shopping-cart.svg";
import styles from "./styles.module.css";

const { shoppingCart, shoppingCartCounter } = styles;

const CartHeaderIcon = () => {
  const totalQuantity = useSelector(cartTotalQuantity);

  return (
    <div className={shoppingCart}>
      <img alt="" src={shoppingCartImg} width="30" />
      <div className={shoppingCartCounter}>{totalQuantity}</div>
    </div>
  );
};

export default CartHeaderIcon;
