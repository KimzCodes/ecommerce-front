import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../store/cartSlice";
import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";

const { item, itemImg, button, maximumNotice } = styles;

const Product = ({ id, title, price, img, max }) => {
  const dispatch = useDispatch();

  const [btnClicked, setBtnClicked] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const currentQuantity = useSelector((state) => state.cart.items[id] || 0);
  const remainingQuantity = max - currentQuantity;
  const reachedToMax = remainingQuantity <= 0 ? true : false;

  useEffect(() => {
    if (btnClicked === 0) return;
    setBtnDisabled(true);

    const debounce = setTimeout(() => {
      setBtnDisabled(false);
    }, 400);
    return () => clearTimeout(debounce);
  }, [btnClicked]);

  const clickActionHandler = () => {
    setBtnClicked((prev) => prev + 1);
    dispatch(addToCart(id));
  };

  return (
    <div className={item}>
      <div className={itemImg}>
        <img src={img} alt={title} title={title} />
      </div>
      <h2 title={title}>{title}</h2>
      <h3>{price} EGP</h3>
      <p className={maximumNotice}>
        {reachedToMax
          ? "You reached to the limit"
          : `You can add ${remainingQuantity} item(s)`}
      </p>
      <Button
        variant="info"
        onClick={clickActionHandler}
        disabled={btnDisabled || reachedToMax}
        className={button}
      >
        {btnDisabled ? (
          <>
            <Spinner animation="border" size="sm" /> Loading...
          </>
        ) : (
          "Add to cart"
        )}
      </Button>
    </div>
  );
};

export default Product;
