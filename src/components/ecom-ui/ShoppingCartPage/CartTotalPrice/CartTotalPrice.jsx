import styles from "./styles.module.css";

const ShoppingCartTotalPrice = ({ totalPrice }) => {
  const { total } = styles;

  return (
    <div className={total}>
      <span>TotalPrice</span>
      <span>${totalPrice}</span>
    </div>
  );
};

export default ShoppingCartTotalPrice;
