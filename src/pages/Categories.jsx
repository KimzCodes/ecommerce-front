import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../state/categorySlice";
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
      <GridList items={records} loading={loading} error={error}>
        <Category />
      </GridList>
    </div>
  );
};

export default Categories;
