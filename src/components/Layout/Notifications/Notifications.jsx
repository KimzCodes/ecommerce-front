import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeReachToMax } from "../../../store/cart/cartSlice";
import { Alert } from "react-bootstrap";

import styles from "./styles.module.css";

const Notifications = () => {
  const { notification } = styles;

  const dispatch = useDispatch();
  const reachToMax = useSelector((state) => state.cart.reachToMax);

  const closeReachToMaxHandler = useCallback(() => {
    dispatch(closeReachToMax());
  }, [dispatch]);

  useEffect(() => {
    if (!reachToMax) {
      return;
    }

    const debounce = setTimeout(closeReachToMaxHandler, 3500);
    window.addEventListener("beforeunload", closeReachToMaxHandler);

    return () => {
      clearTimeout(debounce);
      window.addEventListener("beforeunload", closeReachToMaxHandler);
    };
  }, [reachToMax, closeReachToMaxHandler]);

  return (
    <div className={notification}>
      {reachToMax ? (
        <Alert variant="info" onClose={closeReachToMaxHandler} dismissible>
          <p>Sorry, you reached to maximum limit.</p>
        </Alert>
      ) : null}
    </div>
  );
};

export default Notifications;
