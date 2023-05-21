import { cloneElement } from "react";
import Loading from "../Loading/Loading";

import styles from "./styles.module.css";

const GridList = ({ children, records, selectedProduct, error, loading }) => {
  const { grid } = styles;

  const renderElements = records.map((record) =>
    cloneElement(children, {
      key: record.id,
      ...record,
      selectedProduct,
    })
  );

  return (
    <Loading error={error} loading={loading}>
      <div className={grid}>{renderElements}</div>
    </Loading>
  );
};

export default GridList;
