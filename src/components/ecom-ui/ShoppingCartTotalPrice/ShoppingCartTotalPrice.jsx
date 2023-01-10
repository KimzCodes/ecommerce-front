import styles from "./styles.module.css";

const ShoppingCartTotalPrice = () => {
  const { total } = styles;

  return (
    <div className={total}>
      <span>TotalPrice</span>
      <span>$10</span>
    </div>
  );
};

export default ShoppingCartTotalPrice;
