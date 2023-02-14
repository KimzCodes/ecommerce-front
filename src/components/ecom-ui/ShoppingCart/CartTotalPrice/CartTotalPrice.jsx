import styles from "./styles.module.css";

const CartTotalPrice = ({ totalPrice }) => {
  const { total } = styles;

  return (
    <div className={total}>
      <span>TotalPrice</span>
      <span>${totalPrice}</span>
    </div>
  );
};

export default CartTotalPrice;
