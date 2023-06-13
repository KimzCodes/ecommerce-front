import { cloneElement } from "react";
import Lottie from "lottie-react";
import Loading from "../Loading/Loading";
import fixingBugs from "../../../assets/lottie/fixingBugs.json";

import styles from "./styles.module.css";

const GridList = ({ children, records, selectedProduct, error, loading }) => {
  const { grid, errorMessage } = styles;

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
      <>
        <Lottie
          animationData={fixingBugs}
          style={{ maxWidth: "500px", margin: "0 auto" }}
        />
        <p className={errorMessage}>
          We are facing technical issues, please try after sometime.
        </p>
      </>
    );
  return (
    <Loading error={error} loading={loading}>
      {renderElements}
    </Loading>
  );
};

export default GridList;
