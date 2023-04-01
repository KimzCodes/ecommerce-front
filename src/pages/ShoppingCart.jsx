import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCartItems } from "../store/productSlice";
import { changeQuantity, cartTotalPrice } from "../store/cartSlice";
import { CartList, CartTotalPrice } from "../components/ecom-ui";
import { Loading } from "../components/Layout";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const { records, loading, error } = useSelector((state) => state.products);
  const totalPrice = useSelector(cartTotalPrice);

  useEffect(() => {
    dispatch(filterByCartItems());
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
          products={records}
          changeQuantityHandler={changeQuantityHandler}
        />
        <CartTotalPrice totalPrice={totalPrice} />
      </Loading>
    </div>
  );
};

export default ShoppingCart;
