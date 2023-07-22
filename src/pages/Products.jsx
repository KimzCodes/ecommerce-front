import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../store/productSlice";
import { useParams } from "react-router-dom";
import { Product } from "../components/ecom-ui";
import { Loading } from "../components/layout";

const Products = () => {
  const dispatch = useDispatch();
  const { prefix } = useParams();

  const { records, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(filterProducts(prefix));
  }, [prefix, dispatch]);

  const renderProducts =
    records.length > 0
      ? records.map((record) => <Product key={record.id} {...record} />)
      : "There is no records available";

  return (
    <Loading loading={loading} error={error}>
      <div className="grid">{renderProducts}</div>
    </Loading>
  );
};

export default Products;
