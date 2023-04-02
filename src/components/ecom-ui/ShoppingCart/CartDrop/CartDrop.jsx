import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCartItems } from "../../../../store/productSlice";

import { useNavigate } from "react-router-dom";
import { Loading } from "../../../Layout";
import { Button } from "react-bootstrap";
import styles from "./styles.module.css";

const { container, cartItems, cartItem, button } = styles;

const CartDrop = ({ close }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const { records, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (records.length > 0) {
      return;
    }
    dispatch(filterByCartItems());
  }, [dispatch, records]);

  const navigateHandler = () => {
    navigate("shopping-cart");
    close();
  };

  const itemsList = !records.length ? (
    <div>Your cart is empty</div>
  ) : (
    records.map((el) => {
      const quantity = items[el.id];
      return (
        <div className={cartItem} key={el.id}>
          <img src={el.img} alt={el.title} />
          <h2>{el.title}</h2>
          <h3>
            {el.price} EGP x {quantity}
          </h3>
        </div>
      );
    })
  );

  return (
    <div className={container}>
      <Loading loading={loading} error={error}>
        <div className={cartItems}>{itemsList}</div>
      </Loading>
      <Button className={button} variant="dark" onClick={navigateHandler}>
        Go to checkout
      </Button>
    </div>
  );
};

export default CartDrop;
