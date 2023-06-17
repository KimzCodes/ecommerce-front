import useGetProductsByItems from "../hooks/use-get-products-by-items";
import { CartList, CartTotalPrice } from "../components/ecom-ui";
import { Loading, LottieAnimation } from "../components/Layout";
import { useCallback } from "react";

const ShoppingCart = () => {
  const {
    loading,
    error,
    products,
    cartTotalPrice,
    cartRemoveRecord,
    cartChangeQuantity,
  } = useGetProductsByItems();

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

  const renderShoppingCart = !products.length ? (
    <LottieAnimation animationData="cartEmptyLarge" />
  ) : (
    <>
      <CartList
        products={products}
        changeQuantityHandler={changeQuantityHandler}
        removeProductHandler={removeProductHandler}
      />
      <CartTotalPrice totalPrice={cartTotalPrice} />
    </>
  );

  return (
    <div>
      <Loading loading={loading} error={error}>
        {renderShoppingCart}
      </Loading>
    </div>
  );
};

export default ShoppingCart;
