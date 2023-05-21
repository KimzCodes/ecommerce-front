import { memo } from "react";
import CartItem from "../CartItem/CartItem";

const CartList = ({
  products,

  changeQuantityHandler,
  removeProductHandler,
}) => {
  const shoppingCartList = products.length
    ? products.map((el) => {
        return (
          <CartItem
            key={el.id}
            data={el}
            changeQuantityHandler={changeQuantityHandler}
            removeProductHandler={removeProductHandler}
          />
        );
      })
    : null;

  return <div>{shoppingCartList}</div>;
};

export default memo(CartList);
