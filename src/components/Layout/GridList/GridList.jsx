import { cloneElement } from "react";
import Loading from "../Loading/Loading";

import styles from "./styles.module.css";

const GridList = ({ children, items, error, loading }) => {
  const { grid } = styles;

  const renderItem = items.map((item) =>
    cloneElement(children, {
      key: item.id,
      ...item,
    })
  );

  return (
    <Loading error={error} loading={loading}>
      <div className={grid}>{renderItem}</div>
    </Loading>
  );
};

export default GridList;
