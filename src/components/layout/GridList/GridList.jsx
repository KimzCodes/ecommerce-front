import { cloneElement } from "react";
import Loading from "../Loading/Loading";

import styles from "./styles.module.css";
const { grid } = styles;

const GridList = ({ records, children, loading, error, selectedProduct }) => {
  const renderElements =
    records.length > 0
      ? records.map((record) =>
          cloneElement(children, { key: record.id, selectedProduct, ...record })
        )
      : "There is no records available";

  return (
    <Loading loading={loading} error={error}>
      <div className={grid}>{renderElements}</div>
    </Loading>
  );
};

export default GridList;
