import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../state/categorySlice";
import { Category } from "../components/ecom-ui";

const Categories = () => {
  const dispatch = useDispatch();
  const { loading, error, records } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categoreis = records.map((item) => (
    <Category key={item.id} {...item} />
  ));

  return (
    <div>
      <div className="grid">{categoreis}</div>
    </div>
  );
};

export default Categories;
