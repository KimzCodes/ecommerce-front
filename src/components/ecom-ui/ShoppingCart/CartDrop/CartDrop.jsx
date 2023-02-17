import { useEffect, memo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterByCartItems } from "../../../../store/productSlice";

import { Button } from "react-bootstrap";
import { Loading } from "../../../Layout";
import styles from "./styles.module.css";

const CartDrop = ({ close }) => {
  const { container, button, cartItems, cartItem } = styles;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const items = useSelector((state) => state.cart.items);
  const { records, loading, error } = useSelector((state) => state.products);
  const cleanPathName = pathname.replace(/\//, "");

  useEffect(() => {
    if (cleanPathName === "shopping-cart") return;
    dispatch(filterByCartItems());
  }, [dispatch, cleanPathName]);

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
