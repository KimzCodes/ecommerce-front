import { memo } from "react";
import useGetProductsByItems from "../../../../hooks/use-get-products-by-items";
import { useNavigate } from "react-router-dom";

import { Button } from "react-bootstrap";
import { Loading } from "../../../Layout";
import styles from "./styles.module.css";

const CartDrop = ({ close }) => {
  const { container, button, cartList, cartItem } = styles;

  const navigate = useNavigate();

  const { loading, error, products, cartItems } = useGetProductsByItems();

  const navigateHandler = () => {
    close();
    navigate("shopping-cart");
  };

  const cartItemsList =
    products.length === 0 ? (
      <div>Your cart is empty</div>
    ) : (
      products.map((el) => {
        const quantity = cartItems[el.id];

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
        <div className={cartList}> {cartItemsList}</div>
      </Loading>
      <Button className={button} variant="dark" onClick={navigateHandler}>
        Go to checkout
      </Button>
    </div>
  );
};

export default memo(CartDrop);
