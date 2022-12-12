import { useRouteError } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Container>
      <div className="notFound">
        <h1>{error.status}</h1>
        <p>{error.statusText}</p>

        <Button variant="link">Go Back</Button>
      </div>
    </Container>
  );
};

export default ErrorPage;
