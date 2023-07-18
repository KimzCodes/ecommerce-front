import { useRouteError } from "react-router-dom";
import { Button } from "react-bootstrap";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="notFound">
      <h1>{error.status}</h1>
      <p>{error.statusText}</p>

      <Button variant="link">Go Back</Button>
    </div>
  );
};

export default ErrorPage;
