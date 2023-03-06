import React from 'react';
import Loading from '../Loading/Loading';
import styles from './GridList.module.css';
const GridList = ({ children, items, loading, error }) => {
  const renderItems = items?.map((item) =>
    React.cloneElement(children, { key: item.id, ...item })
  );
  const { grid } = styles;
  return (
    <Loading loading={loading} error={error}>
      <div className={grid}>{renderItems} </div>
    </Loading>
  );
};

export default GridList;
