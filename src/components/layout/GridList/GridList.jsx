import Loading from "../Loading/Loading";

import styles from "./styles.module.css";
const { grid } = styles;

const GridList = ({ records, loading, error, renderChild }) => {
  const renderElements =
    records.length > 0
      ? records.map((record) => renderChild(record))
      : "There is no records available";

  return (
    <Loading loading={loading} error={error}>
      <div className={grid}>{renderElements}</div>
    </Loading>
  );
};

export default GridList;
