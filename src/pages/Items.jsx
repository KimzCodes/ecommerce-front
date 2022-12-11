import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterItems } from "../state/ItemSlice";
import { useParams } from "react-router-dom";
import { Item } from "../components/ecom-ui";
import { GridList } from "../components/Layout";

const Items = () => {
  const dispatch = useDispatch();
  const { prefix } = useParams();

  const { loading, error, records } = useSelector((state) => state.items);
  console.log(records);
  useEffect(() => {
    dispatch(filterItems(prefix));
  }, [dispatch, prefix]);

  return (
    <div>
      <GridList error={error} loading={loading} items={records}>
        <Item />
      </GridList>
    </div>
  );
};

export default Items;
