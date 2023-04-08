import { useState, useCallback, useEffect } from "react";
import { removeItem, changeQuantity } from "../store/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const useGetProductsByItems = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const cartItemsID = useSelector((state) => state.cart.items);

  const cartLoadProducts = useCallback(async () => {
    if (!Object.keys(cartItemsID).length) {
      setLoading(false);
      return;
    }

    const ids = Object.keys(cartItemsID)
      .map((el) => `id=${el}`)
      .join("&");
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`http://localhost:5005/items?${ids}`);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      setError(error.message || "Can not get items full data");
    }
    setLoading(false);
  }, [cartItemsID]);

  const cartRemoveRecord = useCallback(
    (id) => {
      setProducts((prev) => prev.filter((el) => el.id !== id));
      dispatch(removeItem(id));
    },
    [dispatch]
  );

  const cartChangeQuantity = useCallback(
    (data) => {
      dispatch(changeQuantity(data));
    },
    [dispatch]
  );

  useEffect(() => {
    if (products.length > 0) return;
    cartLoadProducts();
  }, [cartLoadProducts, products]);

  return {
    loading,
    error,
    products,
    cartItemsID,
    cartLoadProducts,
    cartRemoveRecord,
    cartChangeQuantity,
  };
};

export default useGetProductsByItems;
