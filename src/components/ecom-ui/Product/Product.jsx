import { Button } from "react-bootstrap";
import styles from "./styles.module.css";

const Product = ({ btnText, actionType = "add" }) => {
  const { item, itemImg } = styles;

  return (
    <div className={item}>
      <div className={itemImg}>
        <img
          src="https://eg.hm.com/assets/styles/HNM/14482498/6103a8463876770c30cdba3535b7be1f333315fe/2/image-thumb__3464789__product_listing/cb91f8f128ac2125e0ec3a008a2e8d2497d15434.jpg"
          alt=""
        />
      </div>
      <h2>Title</h2>
      <h3>10 EGP</h3>
      <Button variant="info" onClick={actionType}>
        {btnText || "Add to cart"}
      </Button>
    </div>
  );
};

export default Product;
