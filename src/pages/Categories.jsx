import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../store/categories/categoriesSlice";
import { Category } from "../components/ecom-ui";
import { GridList } from "../components/Layout";

const Categories = () => {
  const dispatch = useDispatch();
  const { loading, error, records } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div>
      <GridList records={records} loading={loading} error={error}>
        <Category />
      </GridList>
    </div>
  );
};

export default Categories;
