import { useCallback } from "react";
import useGetProductsByItems from "../hooks/use-get-products-by-items";
import { useDispatch, useSelector } from "react-redux";
import {
  changeQuantity,
  cartTotalPrice,
  removeItem as removeItemFromCartSlice,
} from "../store/cart/cartSlice";

import { CartList, CartTotalPrice, CartEmpty } from "../components/ecom-ui";
import { Loading } from "../components/Layout";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const { loading, error, products, removeItem } = useGetProductsByItems();

  const totalPrice = useSelector((state) => cartTotalPrice(state, products));

  const changeQuantityHandler = useCallback(
    (data) => {
      dispatch(changeQuantity(data));
    },
    [dispatch]
  );

  const removeItemHandler = useCallback(
    (data) => {
      const { id } = data;
      removeItem(id);
      dispatch(removeItemFromCartSlice(id));
    },
    [removeItem, dispatch]
  );

  return (
    <div>
      <Loading loading={loading} error={error}>
        {products.length > 0 ? (
          <>
            <CartList
              products={products}
              changeQuantityHandler={changeQuantityHandler}
              removeItemHandler={removeItemHandler}
            />
            <CartTotalPrice totalPrice={totalPrice} />
          </>
        ) : (
          <CartEmpty />
        )}
      </Loading>
    </div>
  );
};

export default ShoppingCart;
