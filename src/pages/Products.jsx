import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cart/cartSlice";
import { actFilterProducts, cleanRecords } from "../store/product/productSlice";
import { useParams } from "react-router-dom";
import { Product } from "../components/ecom-ui";
import { GridList } from "../components/Layout";

const Products = () => {
  const dispatch = useDispatch();
  const { prefix } = useParams();

  const { loading, error, records } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(actFilterProducts(prefix));

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
        lottieAnimation="notFound"
      >
        <Product />
      </GridList>
    </div>
  );
};

export default Products;
