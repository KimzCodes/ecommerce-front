import { useState, useCallback } from "react";

const useGetProducts = () => {
  const [recordsLoading, setRecordsLoading] = useState(false);
  const [recordsError, setRecordsError] = useState(null);
  const [records, setRecords] = useState([]);

  const sendRequest = useCallback(async (idsArray) => {
    setRecordsLoading(true);
    setRecordsError(null);

    const ids = idsArray.map((el) => `id=${el}`).join("&");

    try {
      const res = await fetch(`http://localhost:5005/items?${ids}`);
      const data = await res.json();
      setRecords((prev) => [...prev, ...data]);
    } catch (error) {
      setRecordsError(error.message || "Can not get items full data");
    }

    setRecordsLoading(false);
  }, []);

  return { recordsLoading, recordsError, records, sendRequest };
};

export default useGetProducts;
