import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addToCartAvailability } from "../../../store/cartSlice";
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
  const availableQuantity = useSelector((state) =>
    addToCartAvailability(state, id, max)
  );

  const reachedToMax = availableQuantity > 0 ? false : true;

  //1
  //init->store -> useSelector->AvailabilityFn({},1,3)->memo->invoke { items[1] || 0 -> 3-0 = 3} -> memo(3)-> memo(3) -> render
  //addCart->store->useSelector->AvailabilityFn({1:1},1,3)->memo->invoke {items[1]->1 -> 3-1 = 2} -> memo(3 != 2) -> memo(3!=2) ->render

  //2
  //init->store -> useSelector->AvailabilityFn({},2,4)->memo->invoke { items[2] || 0 -> 4-0 = 4} -> memo(4)-> memo(4) -> render
  //addCart->store->useSelector->AvailabilityFn({1:1},2,4)->memo->invoke { items[2] || 0 -> 4-0 = 4} -> memo(4 === 4) -> memo(4 === 4) !=render

  //3
  //init->store -> useSelector->AvailabilityFn({},3,3)->memo->invoke { items[3] || 0 -> 3-0 = 3} -> memo(3)-> memo(3) -> render
  //addCart->store->useSelector->AvailabilityFn({1:1},3,3)->memo->invoke {items[3] || 0 -> 3-0 = 3} -> memo(3 == 3)-> memo(3 ==3 )!render

  useEffect(() => {
    if (btnClicked === 0) return;
    setDisabled(true);

    const debounce = setTimeout(() => {
      setDisabled(false);
    }, 400);
    return () => clearTimeout(debounce);
  }, [btnClicked]);

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
      <p className={maximumNotice}>
        {reachedToMax
          ? "You reached to the limit"
          : `You can add ${availableQuantity} item(s)`}
      </p>
      <Button
        variant="info"
        onClick={clickActionHandler}
        disabled={disabled || reachedToMax}
      >
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
