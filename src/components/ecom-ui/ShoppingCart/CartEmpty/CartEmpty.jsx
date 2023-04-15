import Lottie from "lottie-react";
import shoppingCartEmpty from "../../../../assets/lottie/emptyBox.json";
import styles from "./styles.module.css";

const CartEmpty = ({ size = "large" }) => {
  return (
    <div className={styles.container}>
      <Lottie
        className={styles[size]}
        animationData={shoppingCartEmpty}
        loop={true}
      />
      <p>Your shopping cart looks empty</p>
    </div>
  );
};

export default CartEmpty;
