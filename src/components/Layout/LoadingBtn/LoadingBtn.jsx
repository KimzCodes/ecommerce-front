import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoadingBtn = ({ children, loading, error }) => {
  const btnHandler = loading ? (
    <Button disabled>Loading…</Button>
  ) : error ? (
    <>
      <p style={{ color: "red" }}>{error}</p>
      {children}
    </>
  ) : (
    children
  );
  return btnHandler;
};

export default LoadingBtn;
