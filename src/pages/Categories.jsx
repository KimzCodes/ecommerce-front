import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/categorySlice";
import { Category } from "../components/ecom-ui";
import { GridList } from "../components/layout";

const Categories = () => {
  const { records, loading, error } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  console.log("sd");
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <GridList
      records={records}
      loading={loading}
      error={error}
      renderChild={(record) => <Category key={record.id} {...record} />}
    />
  );
};

export default Categories;
