import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../store/productSlice";
import { useParams } from "react-router-dom";
import { Product } from "../components/ecom-ui";
import { Loading, GridList } from "../components/layout";

const Products = () => {
  const dispatch = useDispatch();
  const { prefix } = useParams();

  const { records, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(filterProducts(prefix));
  }, [prefix, dispatch]);

  return (
    <Loading loading={loading} error={error}>
      <GridList records={records}>
        <Product />
      </GridList>
    </Loading>
  );
};

export default Products;
