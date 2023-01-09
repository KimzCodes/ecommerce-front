import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCartItems } from "../store/productSlice";
import { changeQuantity } from "../store/cartSlice";
import { ShoppingCartItem } from "../components/ecom-ui";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.products.records);

  useEffect(() => {
    dispatch(filterByCartItems());
  }, [dispatch]);

  const changeQuantityHandler = (data) => {
    dispatch(changeQuantity(data));
  };

  const shoppingCartList =
    products.length &&
    products.map((el) => {
      const quantity = items[el.id];
      return (
        <ShoppingCartItem
          key={el.id}
          data={el}
          quantity={quantity}
          changeQuantityHandler={changeQuantityHandler}
        />
      );
    });

  return <div>{shoppingCartList}</div>;
};

export default ShoppingCart;
