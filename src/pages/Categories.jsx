import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/categorySlice";
import { Category } from "../components/ecom-ui";
const Categories = () => {
  const { records } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const renderCategories = records.map((el) => (
    <Category key={el.id} {...el} />
  ));

  return <div className="grid">{renderCategories}</div>;
};

export default Categories;
