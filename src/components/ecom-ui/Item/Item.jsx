import { Button } from "react-bootstrap";
import styles from "./styles.module.css";

const Item = ({ btnText, btnAction }) => {
  const { item } = styles;

  return (
    <div className={item}>
      <img
        src="https://cdn-eu.dynamicyield.com/api/9876644/images/244c68ad42d8b__hp-w12-22032022-h_m-women_shirts-blouses.jpg"
        alt=""
      />
      <h2>Title</h2>
      <h3>10 EGP</h3>
      <Button variant="info" onClick={btnAction}>
        {btnText || "Add to card"}
      </Button>
    </div>
  );
};

export default Item;
