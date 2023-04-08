import useGetProductsByItems from "../hooks/use-get-products-by-items";
import { useSelector } from "react-redux";
import { cartTotalPrice } from "../store/cartSlice";
import { CartList, CartTotalPrice } from "../components/ecom-ui";
import { Loading } from "../components/Layout";
import { useCallback } from "react";

const ShoppingCart = () => {
  const { loading, error, products, cartRemoveRecord, cartChangeQuantity } =
    useGetProductsByItems();

  const totalPrice = useSelector((state) => cartTotalPrice(state, products));

  const changeQuantityHandler = useCallback(
    (data) => {
      cartChangeQuantity(data);
    },
    [cartChangeQuantity]
  );

  const removeProductHandler = useCallback(
    (data) => {
      const { id } = data;
      cartRemoveRecord(id);
    },
    [cartRemoveRecord]
  );

  return (
    <div>
      <Loading loading={loading} error={error}>
        <CartList
          products={products}
          changeQuantityHandler={changeQuantityHandler}
          removeProductHandler={removeProductHandler}
        />
        <CartTotalPrice totalPrice={totalPrice} />
      </Loading>
      <button onClick={sendRequest}>try</button>
    </div>
  );
};

export default ShoppingCart;
