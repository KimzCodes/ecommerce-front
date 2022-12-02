import { Button } from "react-bootstrap";
import styles from "./styles.module.css";

const Item = ({ btnText, btnAction }) => {
  const { item } = styles;

  return (
    <div className={item}>
      <img
        src="https://eg.hm.com/assets/styles/HNM/14317182/04b7fbc49993d530655ebdea0a19b98f006ad467/1/image-thumb__3199024__product_zoom_medium_606x504/04b7fbc49993d530655ebdea0a19b98f006ad467.jpg"
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
