import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCartItems } from "../store/productSlice";
import { changeQuantity, totalCartPrice } from "../store/cartSlice";
import {
  ShoppingCartList,
  ShoppingCartTotalPrice,
} from "../components/ecom-ui";
import { Loading } from "../components/Layout";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const { records, loading, error } = useSelector((state) => state.products);
  const totalPrice = useSelector(totalCartPrice);

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
        <ShoppingCartList
          items={items}
          products={records}
          changeQuantityHandler={changeQuantityHandler}
        />
        <ShoppingCartTotalPrice totalPrice={totalPrice} />
      </Loading>
    </div>
  );
};

export default ShoppingCart;
