import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { checkAddToCartAvailability } from "../../../store/cartSlice";
import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";

const { item, itemImg, maximumNotice } = styles;

const Product = ({
  id,
  title,
  price,
  img,
  max,
  selectedProduct,
  btnText,
  actionType = "add",
}) => {
  const [btnClicked, setBtnClicked] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const cartItems = useSelector((state) =>
    checkAddToCartAvailability(state, id, max)
  );

  console.log("render", cartItems);
  //useSelector -> selector -> state.cart.items return items
  //filter by id -> items[id] -> quantity
  //calculate -> max - quantity -> remaining quantity

  // useEffect(() => {
  //   if (btnClicked === 0) return;
  //   setDisabled(true);

  //   const debounce = setTimeout(() => {
  //     setDisabled(false);
  //   }, 400);
  //   return () => clearTimeout(debounce);
  // }, [btnClicked]);

  const clickActionHandler = () => {
    setBtnClicked((prev) => prev + 1);
    selectedProduct(id);
  };

  return (
    <div className={item}>
      <div className={itemImg}>
        <img src={img} alt={title} title={title} />
      </div>
      <h2 title={title}>{title}</h2>
      <h3>{price} EGP</h3>
      <p className={maximumNotice}>You can add 3 item(s)</p>
      <Button variant="info" onClick={clickActionHandler} disabled={disabled}>
        {disabled ? (
          <>
            <Spinner animation="border" size="sm" /> Loading...
          </>
        ) : (
          btnText || "Add to cart"
        )}
      </Button>
    </div>
  );
};

export default Product;
