import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/categorySlice";
import { Category } from "../components/ecom-ui";
import { Loading, GridList } from "../components/layout";

const Categories = () => {
  const { records, loading, error } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Loading loading={loading} error={error}>
      <GridList records={records}>
        <Category />
      </GridList>
    </Loading>
  );
};

export default Categories;
