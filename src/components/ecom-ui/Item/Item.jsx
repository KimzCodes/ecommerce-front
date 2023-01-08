import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";

const Item = ({ btnText, actionType, id, title, price, img, max }) => {
  const { item, button } = styles;
  const [disabled, setDisabled] = useState(false);
  const [btnClicked, setBtnClicked] = useState(0);
  const dispatch = useDispatch();

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

  const actionHandler = () => {
    if (actionType === "add") {
      dispatch({ type: "cart/addToCart", payload: { id, max } });
      setBtnClicked((prev) => prev + 1);
    }
  };

  return (
    <div className={item}>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{price} EGP</h3>
      <Button
        variant="info"
        onClick={actionHandler}
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

export default Item;
