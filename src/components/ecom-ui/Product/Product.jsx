import { Button } from "react-bootstrap";
import styles from "./styles.module.css";

const { item, itemImg } = styles;

const Product = ({ id, title, price, img, btnText, actionType = "add" }) => {
  return (
    <div className={item}>
      <div className={itemImg}>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>{price} EGP</h3>
      <Button variant="info" onClick={actionType}>
        {btnText || "Add to cart"}
      </Button>
    </div>
  );
};

export default Product;
