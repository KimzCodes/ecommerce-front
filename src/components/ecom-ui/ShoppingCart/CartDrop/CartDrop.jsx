import { useEffect, memo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRecordsByCartItems } from "../../../../store/cart/cartSlice";

import { Button } from "react-bootstrap";
import { Loading } from "../../../Layout";
import styles from "./styles.module.css";

const CartDrop = ({ close }) => {
  const { container, button, cartItems, cartItem } = styles;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { items, cartRecordsFullInfo, loading, error } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    if (pathname === "/shopping-cart") return;
    dispatch(getRecordsByCartItems());
  }, [dispatch, pathname]);

  const itemsList =
    cartRecordsFullInfo.length === 0 ? (
      <div>Your cart is empty</div>
    ) : (
      cartRecordsFullInfo.map((el) => {
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

  const navigateHandler = () => {
    close();
    navigate("shopping-cart");
  };
  return (
    <div className={container} id="cartDrop">
      <Loading loading={loading} error={error}>
        <div className={cartItems}> {itemsList}</div>
      </Loading>
      <Button className={button} variant="dark" onClick={navigateHandler}>
        Go to checkout
      </Button>
    </div>
  );
};

export default memo(CartDrop);
