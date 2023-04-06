import { useCallback } from "react";
import useGetProductsByItems from "../hooks/use-get-products-by-items";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, cartTotalPrice } from "../store/cartSlice";
import { CartList, CartTotalPrice } from "../components/ecom-ui";
import { Loading } from "../components/Layout";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { loading, error, products, cartItemsID, removeRecord } =
    useGetProductsByItems();

  const totalPrice = useSelector((state) => cartTotalPrice(state, products));

  const changeQuantityHandler = useCallback(
    (data) => {
      dispatch(changeQuantity(data));
    },
    [dispatch]
  );

  const removeProductHandler = (data) => {
    const { id } = data;
    removeRecord(id);
  };

  return (
    <div>
      <Loading loading={loading} error={error}>
        <CartList
          items={cartItemsID}
          products={products}
          changeQuantityHandler={changeQuantityHandler}
          removeProductHandler={removeProductHandler}
        />
        <CartTotalPrice totalPrice={totalPrice} />
      </Loading>
    </div>
  );
};

export default ShoppingCart;
