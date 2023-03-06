import React from 'react';
import styles from './loading.module.css';
const Loading = ({ loading, children, error }) => {
  const { loadingWrapper, errorWrapper } = styles;
  return (
    <>
      {loading ? (
        <div className={loadingWrapper}>loading wait ..</div>
      ) : error ? (
        <div className={errorWrapper}>{error}</div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Loading;
