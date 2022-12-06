import React from "react";
import styles from "./styles.module.css";

const Grid = ({ children, items }) => {
  const { grid } = styles;

  const renderItems = items.map((el) =>
    React.cloneElement(children, { key: el.id, ...el })
  );
  return <div className={grid}>{renderItems}</div>;
};

export default Grid;
