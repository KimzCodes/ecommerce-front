import { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

const useGetProductsByItems = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const cartItemsID = useSelector((state) => state.cart.items);

  const sendRequest = useCallback(async () => {
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

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return { loading, error, products, cartItemsID, sendRequest };
};

export default useGetProductsByItems;
