import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../store/productSlice";
import { useParams } from "react-router-dom";
import { Product } from "../components/ecom-ui";
import { GridList } from "../components/layout";

const Products = () => {
  const dispatch = useDispatch();
  const { prefix } = useParams();

  const { records, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(filterProducts(prefix));
  }, [prefix, dispatch]);

  return (
    <GridList
      records={records}
      loading={loading}
      error={error}
      renderChild={(record) => <Product key={record.id} {...record} />}
    />
  );
};

export default Products;
