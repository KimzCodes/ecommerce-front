import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterProducts, cleanRecords } from "../store/productSlice";
import { useParams } from "react-router-dom";
import { Product } from "../components/ecom-ui";
import { GridList } from "../components/Layout";

const Products = () => {
  const dispatch = useDispatch();
  const { prefix } = useParams();

  const { loading, error, records } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(filterProducts(prefix));

    return () => {
      dispatch(cleanRecords());
    };
  }, [dispatch, prefix]);

  return (
    <div>
      <GridList error={error} loading={loading} records={records}>
        <Product actionType="add" />
      </GridList>
    </div>
  );
};

export default Products;
