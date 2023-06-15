import { cloneElement } from "react";
import Loading from "../Loading/Loading";
import LottieAnimation from "../LottieAnimation/LottieAnimation";

import styles from "./styles.module.css";

const { grid } = styles;

const GridList = ({
  children,
  records,
  selectedProduct,
  error,
  loading,
  lottieAnimation,
}) => {
  const renderElements =
    records.length > 0 ? (
      <div className={grid}>
        {records.map((record) =>
          cloneElement(children, {
            key: record.id,
            ...record,
            selectedProduct,
          })
        )}
      </div>
    ) : (
      <LottieAnimation animationData={lottieAnimation} />
    );
  return (
    <Loading error={error} loading={loading}>
      {renderElements}
    </Loading>
  );
};

export default GridList;
