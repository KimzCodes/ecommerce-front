import { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

const useGetProductsByItems = (autoRender = false) => {
  const cartItems = useSelector((state) => state.cart.items);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [isRendered, setIsRendered] = useState(false);

  const sendRequest = useCallback(async () => {
    if (isRendered && !autoRender) {
      return;
    }

    if (!Object.keys(cartItems).length) {
      return;
    }

    setLoading(true);
    setError(null);
    const ids = Object.keys(cartItems)
      .map((el) => `id=${el}`)
      .join("&");

    try {
      const res = await fetch(`http://localhost:5005/items?${ids}`);
      const data = await res.json();

      setProducts(data);
    } catch (error) {
      setError(error.message || "Can not get items full data");
    }

    setLoading(false);
    setIsRendered(true);
  }, [isRendered, autoRender, cartItems]);

  const removeItem = useCallback((id) => {
    setProducts((prev) => prev.filter((el) => el.id !== id));
  }, []);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return { loading, error, products, cartItems, removeItem };
};

export default useGetProductsByItems;
