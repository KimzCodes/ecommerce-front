import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/categorySlice";
import { Category } from "../components/ecom-ui";

const Categories = () => {
  const { records, loading, error } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const renderCategories =
    records.length > 0
      ? records.map((record) => <Category key={record.id} {...record} />)
      : "There is no records available";

  if (loading) {
    return <div>Loading please wait</div>;
  }

  if (error) {
    return <div>Error from server</div>;
  }

  return <div className="grid">{renderCategories}</div>;
};

export default Categories;
