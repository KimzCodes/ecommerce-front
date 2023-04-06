import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
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

  const selectedProduct = (data) => {
    const { id, max } = data;
    dispatch(addToCart({ id, max }));
  };

  return (
    <div>
      <GridList
        error={error}
        loading={loading}
        records={records}
        selectedProduct={selectedProduct}
      >
        <Product />
      </GridList>
    </div>
  );
};

export default Products;
