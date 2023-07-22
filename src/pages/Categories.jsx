import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/categorySlice";
import { Category } from "../components/ecom-ui";
import { Loading } from "../components/layout";

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

  return (
    <Loading loading={loading} error={error}>
      <div className="grid">{renderCategories}</div>
    </Loading>
  );
};

export default Categories;
