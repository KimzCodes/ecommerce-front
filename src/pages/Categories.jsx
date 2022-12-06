import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../state/categorySlice";
import { Category } from "../components/ecom-ui";
import { Grid } from "../components/Layout";

const Categories = () => {
  const dispatch = useDispatch();
  const { loading, error, records } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div>
      <Grid items={records}>
        <Category />
      </Grid>
    </div>
  );
};

export default Categories;
