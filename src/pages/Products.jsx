import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterProducts, cleanRecords } from "../store/products/productsSlice";
import { addToCart } from "../store/cart/cartSlice";
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

  const selectedItem = (data) => {
    const { id, max } = data;
    dispatch(addToCart({ id, max }));
  };

  return (
    <div>
      <GridList
        error={error}
        loading={loading}
        records={records}
        selectedItem={selectedItem}
      >
        <Product />
      </GridList>
    </div>
  );
};

export default Products;
