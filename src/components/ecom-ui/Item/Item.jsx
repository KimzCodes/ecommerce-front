import { Button } from "react-bootstrap";
import styles from "./styles.module.css";

const Item = ({ btnText, btnAction, id, title, price, img }) => {
  const { item } = styles;

  return (
    <div className={item}>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{price} EGP</h3>
      <Button variant="info" onClick={btnAction}>
        {btnText || "Add to card"}
      </Button>
    </div>
  );
};

export default Item;
