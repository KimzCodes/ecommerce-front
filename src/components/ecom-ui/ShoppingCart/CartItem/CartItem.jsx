import { useSelector } from "react-redux";
import { itemQuantityById } from "../../../../store/cart/cartSlice";
import Product from "../../Product/Product";
import { Form } from "react-bootstrap";
import styles from "./styles.module.css";

const { cartItem, cartItemSelection } = styles;

const CartItem = ({ data, changeQuantityHandler, removeProductHandler }) => {
  const quantity = useSelector((state) => itemQuantityById(state, data.id));
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
      <Product
        btnText="Remove"
        actionType="remove"
        {...data}
        selectedProduct={removeProductHandler}
      />
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

export default CartItem;
