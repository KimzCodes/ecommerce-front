import { cloneElement } from "react";
import styles from "./styles.module.css";
const { grid } = styles;

const GridList = ({ records, children }) => {
  const renderElements =
    records.length > 0
      ? records.map((record) =>
          cloneElement(children, { key: record.id, ...record })
        )
      : "There is no records available";

  return <div className={grid}>{renderElements}</div>;
};

export default GridList;
