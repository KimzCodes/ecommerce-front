import { useEffect, useCallback } from "react";
import useGetProducts from "../hooks/use-get-products";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, cartTotalPrice } from "../store/cart/cartSlice";

import { CartList, CartTotalPrice } from "../components/ecom-ui";
import { Loading } from "../components/Layout";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector(cartTotalPrice);

  const {
    recordsLoading: loading,
    recordsError: error,
    records: cartRecordsFullInfo,
    sendRequest,
  } = useGetProducts(items);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

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
