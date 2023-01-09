import Product from "../Product/Product";
import { Form } from "react-bootstrap";
import styles from "./styles.module.css";

const ShoppingCartItem = ({ data, changeQuantityHandler }) => {
  const { cartItem, cartItemSelection, quantity } = styles;
  const options = Array(data.max)
    .fill(1)
    .map((_, idx) => {
      const value = ++idx;
      return (
        <option value={value} key={value}>
          {value}
        </option>
      );
    });
  return (
    <div className={cartItem}>
      <Product btnText="Remove" {...data} />
      <div className={cartItemSelection}>
        <Form.Select
          value={quantity}
          onChange={(e) =>
            changeQuantityHandler({ quantity: +e.target.value, id: data.id })
          }
        >
          {options}
        </Form.Select>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
