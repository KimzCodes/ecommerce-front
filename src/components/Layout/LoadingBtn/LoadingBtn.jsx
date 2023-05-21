import Button from "react-bootstrap/Button";

const LoadingBtn = ({ children, loading, error }) => {
  console.log(error);
  const btnHandler = loading ? (
    <Button disabled>Loading…</Button>
  ) : error ? (
    <>
      {children}
      <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
    </>
  ) : (
    children
  );
  return btnHandler;
};

export default LoadingBtn;
