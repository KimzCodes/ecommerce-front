import { useNavigate } from "react-router-dom";

import { Button } from "react-bootstrap";
import { Loading } from "../../../Layout";
import styles from "./styles.module.css";

const CartDrop = ({ items, records, loading, error }) => {
  const { container, button, cartItems, cartItem } = styles;

  const navigate = useNavigate();

  const itemsList =
    records.length === 0 ? (
      <div>Your cart is empty</div>
    ) : (
      records.map((el) => {
        const quantity = items[el.id];

        return (
          <div className={cartItem} key={el.id}>
            <img src={el.img} alt={el.title} />
            <h2>{el.title}</h2>
            <h3>
              {el.price} EGP X {quantity}
            </h3>
          </div>
        );
      })
    );
  return (
    <div className={container} id="cartDrop">
      <Loading loading={loading} error={error}>
        <div className={cartItems}> {itemsList}</div>
      </Loading>
      <Button
        className={button}
        variant="dark"
        onClick={() => navigate("shopping-cart")}
      >
        Go to checkout
      </Button>
    </div>
  );
};

export default CartDrop;
