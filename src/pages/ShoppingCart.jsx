import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, cartTotalPrice } from "../store/cartSlice";
import useGetProducts from "../hooks/use-get-products";

import { CartList, CartTotalPrice } from "../components/ecom-ui";
import { Loading } from "../components/Layout";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.cart);
  const totalPrice = useSelector(cartTotalPrice);

  const {
    recordsLoading,
    recordsError,
    records: cartRecordsFullInfo,
    sendRequest,
  } = useGetProducts(items);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  console.log("x");
  const changeQuantityHandler = useCallback(
    (data) => {
      dispatch(changeQuantity(data));
    },
    [dispatch]
  );

  const isLoading = loading || recordsLoading;
  const isError = error || recordsError;

  return (
    <div>
      <Loading loading={isLoading} error={isError}>
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
