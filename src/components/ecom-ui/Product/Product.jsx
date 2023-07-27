import { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";

const { item, itemImg } = styles;

const Product = ({
  id,
  title,
  price,
  img,
  selectedProduct,
  btnText,
  actionType = "add",
}) => {
  const [btnClicked, setBtnClicked] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (btnClicked === 0) return;
    setIsDisabled(true);

    const debounce = setTimeout(() => {
      setIsDisabled(false);
    }, 400);

    return () => {
      clearTimeout(debounce);
    };
  }, [btnClicked]);

  const clickActionHandler = () => {
    setBtnClicked((prev) => prev + 1);
    selectedProduct(id);
  };

  return (
    <div className={item}>
      <div className={itemImg}>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>{price} EGP</h3>
      <Button variant="info" onClick={clickActionHandler} disabled={isDisabled}>
        {isDisabled ? (
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
