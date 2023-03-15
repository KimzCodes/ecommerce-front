import { useEffect, useCallback } from "react";
import useGetProductsByItems from "../hooks/use-get-products-by-items";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, cartTotalPrice } from "../store/cartSlice";

import { CartList, CartTotalPrice } from "../components/ecom-ui";
import { Loading } from "../components/Layout";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  const {
    loading,
    error,
    records: cartRecordsFullInfo,
    sendRequest,
  } = useGetProductsByItems(items);

  const totalPrice = useSelector((state) =>
    cartTotalPrice(state, cartRecordsFullInfo)
  );
  console.log(totalPrice);
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
