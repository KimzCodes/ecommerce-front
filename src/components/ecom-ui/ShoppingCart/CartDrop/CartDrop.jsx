import { useEffect, memo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import useGetProducts from "../../../../hooks/use-get-products";
import { Button } from "react-bootstrap";
import { Loading } from "../../../Layout";
import styles from "./styles.module.css";

const CartDrop = ({ close }) => {
  const { container, button, cartItems, cartItem } = styles;

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { items, loading, error } = useSelector((state) => state.cart);

  const {
    recordsLoading,
    recordsError,
    records: cartRecordsFullInfo,
    sendRequest,
  } = useGetProducts(items);

  console.log(cartRecordsFullInfo);

  useEffect(() => {
    sendRequest();
  }, [sendRequest, pathname]);

  const navigateHandler = () => {
    close();
    navigate("shopping-cart");
  };

  const isLoading = loading || recordsLoading;
  const isError = error || recordsError;

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
      <Loading loading={isLoading} error={isError}>
        <div className={cartItems}> {itemsList}</div>
      </Loading>
      <Button className={button} variant="dark" onClick={navigateHandler}>
        Go to checkout
      </Button>
    </div>
  );
};

export default memo(CartDrop);
