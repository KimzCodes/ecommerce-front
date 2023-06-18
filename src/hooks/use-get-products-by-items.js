import { useState, useCallback, useEffect, useMemo } from "react";
import {
  removeItem,
  changeQuantity,
  totalPrice,
} from "../store/cart/cartSlice";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const useGetProductsByItems = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const cartItemsID = useSelector((state) => state.cart.items);
  const cartTotalPrice = useSelector((state) => totalPrice(state, products));
  const controller = useMemo(() => new AbortController(), []);

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
      const { data } = await axios.get(`/items?${ids}`, {
        signal: controller.signal,
      });
      setProducts(data);
    } catch (error) {
      setError(error.message || "Can not get items full data");
    }

    setLoading(false);
  }, [cartItemsID, controller]);

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

    return () => controller.abort();
  }, [cartLoadProducts, products, controller]);

  return {
    loading,
    error,
    products,
    cartItemsID,
    cartTotalPrice,
    cartLoadProducts,
    cartRemoveRecord,
    cartChangeQuantity,
  };
};

export default useGetProductsByItems;
