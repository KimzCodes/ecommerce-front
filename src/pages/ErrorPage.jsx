import { useRouteError, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="notFound">
      <h1>{error.status}</h1>
      <p>{error.statusText}</p>

      <Button variant="link" onClick={() => navigate("/", { replace: true })}>
        Go Back
      </Button>
    </div>
  );
};

export default ErrorPage;
