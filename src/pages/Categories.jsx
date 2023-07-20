import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/categorySlice";

const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return <div>Categories</div>;
};

export default Categories;
