import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actGetCategories } from "../store/category/categorySlice";
import { Category } from "../components/ecom-ui";
import { GridList } from "../components/Layout";

const Categories = () => {
  const dispatch = useDispatch();
  const { loading, error, records } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);

  return (
    <div>
      <GridList
        records={records}
        loading={loading}
        error={error}
        lottieAnimation="fixing"
      >
        <Category />
      </GridList>
    </div>
  );
};

export default Categories;
