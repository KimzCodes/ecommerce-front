import { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";

const Product = ({
  id,
  title,
  price,
  img,
  max,
  btnText,
  actionType = "add",
  selectedProduct,
}) => {
  const { item, button } = styles;
  const [disabled, setDisabled] = useState(false);
  const [btnClicked, setBtnClicked] = useState(0);

  useEffect(() => {
    if (btnClicked === 0) return;
    setDisabled(true);
    const debounce = setTimeout(() => {
      setDisabled(false);
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [btnClicked]);

  const clickActionHandler = () => {
    if (actionType === "add") {
      selectedProduct({ id, max, actionType: "add" });
      setBtnClicked((prev) => prev + 1);
    }

    if (actionType === "remove") {
      selectedProduct({ id, actionType: "remove" });
    }
  };

  return (
    <div className={item}>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{price} EGP</h3>
      <Button
        id="product-button"
        variant="info"
        onClick={clickActionHandler}
        disabled={disabled}
        className={button}
      >
        {disabled ? (
          <>
            <Spinner animation="border" size="sm" /> Loading...
          </>
        ) : (
          btnText || "Add to card"
        )}
      </Button>
    </div>
  );
};

export default Product;
