import { useState, useCallback } from "react";

const useGetProductsByItems = (items, autoRender = false) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [records, setRecords] = useState([]);
  const [isRendered, setIsRendered] = useState(false);

  const sendRequest = useCallback(async () => {
    if (isRendered && !autoRender) {
      return;
    }

    if (!Object.keys(items).length) {
      return;
    }

    setLoading(true);
    setError(null);
    const ids = Object.keys(items)
      .map((el) => `id=${el}`)
      .join("&");

    try {
      const res = await fetch(`http://localhost:5005/items?${ids}`);
      const data = await res.json();

      setRecords(data);
    } catch (error) {
      setError(error.message || "Can not get items full data");
    }

    setLoading(false);
    setIsRendered(true);
  }, [isRendered, autoRender, items]);

  const removeItem = useCallback((id) => {
    setRecords((prev) => prev.filter((el) => el.id !== id));
  }, []);

  return { loading, error, records, sendRequest, removeItem };
};

export default useGetProductsByItems;
