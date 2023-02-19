import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeQuantity,
  cartTotalPrice,
  getRecordsByCartItems,
} from "../store/cart/cartSlice";
import { CartList, CartTotalPrice } from "../components/ecom-ui";
import { Loading } from "../components/Layout";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { items, cartRecordsFullInfo, loading, error } = useSelector(
    (state) => state.cart
  );
  const totalPrice = useSelector(cartTotalPrice);

  useEffect(() => {
    dispatch(getRecordsByCartItems());
  }, [dispatch]);

  const changeQuantityHandler = useCallback(
    (data) => {
      dispatch(changeQuantity(data));
    },
    [dispatch]
  );

  return (
    <div>
      <Loading loading={loading} error={error}>
        <CartList
          items={items}
          products={cartRecordsFullInfo}
          changeQuantityHandler={changeQuantityHandler}
        />
        <CartTotalPrice totalPrice={totalPrice} />
      </Loading>
    </div>
  );
};

export default ShoppingCart;
