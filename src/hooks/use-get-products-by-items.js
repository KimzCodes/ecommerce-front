import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const useGetProductsByItems = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  const sendRequest = useCallback(async () => {
    if (!Object.keys(cartItems).length) {
      setLoading(false);
      return;
    }

    const ids = Object.keys(cartItems)
      .map((el) => `id=${el}`)
      .join("&");

    try {
      setError(null);
      setLoading(true);

      const { data } = await axios.get(`/items?${ids}`);

      setProducts(data);
    } catch (error) {
      setError(error.message || "Can not get items full data");
    }

    setLoading(false);
  }, [cartItems]);

  const removeItem = useCallback((id) => {
    setProducts((prev) => prev.filter((el) => el.id !== id));
  }, []);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return { loading, error, products, cartItems, removeItem, sendRequest };
};

export default useGetProductsByItems;
