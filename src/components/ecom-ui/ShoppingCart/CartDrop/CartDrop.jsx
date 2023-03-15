import { useEffect, memo } from "react";
import useGetProductsByItems from "../../../../hooks/use-get-products-by-items";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Button } from "react-bootstrap";
import { Loading } from "../../../Layout";
import styles from "./styles.module.css";

const CartDrop = ({ close }) => {
  const { container, button, cartItems, cartItem } = styles;

  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);

  const {
    loading,
    error,
    records: cartRecordsFullInfo,
    sendRequest,
  } = useGetProductsByItems(items, true);

  useEffect(() => {
    sendRequest(items);
  }, [sendRequest, items]);

  const navigateHandler = () => {
    close();
    navigate("shopping-cart");
  };

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
