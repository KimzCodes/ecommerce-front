import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../store/productSlice";
import { useParams } from "react-router-dom";
import { Product } from "../components/ecom-ui";

const Products = () => {
  const dispatch = useDispatch();
  const { prefix } = useParams();

  const { records, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(filterProducts(prefix));
  }, [prefix, dispatch]);

  const renderProducts = records.map((record) => (
    <Product key={record.id} {...record} />
  ));

  if (loading) {
    return <div>Loading please wait</div>;
  }

  if (error) {
    return <div>Error from server</div>;
  }

  return <div className="grid">{renderProducts}</div>;
};

export default Products;
