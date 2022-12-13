import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import styles from "./styles.module.css";

const Item = ({ btnText, actionType, id, title, price, img }) => {
  const { item } = styles;
  const dispatch = useDispatch();
  const actionHandler = () => {
    if (actionType === "add") {
      dispatch({ type: "cart/addToCart", payload: id });
    }
  };
  return (
    <div className={item}>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{price} EGP</h3>
      <Button variant="info" onClick={actionHandler}>
        {btnText || "Add to card"}
      </Button>
    </div>
  );
};

export default Item;
