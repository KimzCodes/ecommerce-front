import Product from "../../Product/Product";
import { Form } from "react-bootstrap";
import styles from "./styles.module.css";

const CartItem = () => {
  const { cartItem, cartItemSelection } = styles;
  return (
    <div className={cartItem}>
      <Product btnText="Remove" />
      <div className={cartItemSelection}>
        <Form.Select aria-label="Default select example">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Select>
      </div>
    </div>
  );
};

export default CartItem;
