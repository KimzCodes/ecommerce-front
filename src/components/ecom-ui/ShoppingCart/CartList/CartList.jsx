import { memo } from "react";
import CartItem from "../CartItem/CartItem";

const CartList = ({ products, changeQuantityHandler, removeItemHandler }) => {
  const shoppingCartList = products.map((el) => {
    return (
      <CartItem
        key={el.id}
        data={el}
        changeQuantityHandler={changeQuantityHandler}
        removeItemHandler={removeItemHandler}
      />
    );
  });

  return <div>{shoppingCartList}</div>;
};

export default memo(CartList);
