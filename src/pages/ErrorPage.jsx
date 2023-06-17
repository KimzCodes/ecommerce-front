import { useRouteError, useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { LottieAnimation } from "../components/Layout";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <Container>
      <div className="notFound">
        <LottieAnimation animationData="errorPage" />

        <h1>{error.status}</h1>
        <p>{error.statusText}</p>

        <Button variant="link" onClick={() => navigate("/", { replace: true })}>
          Go Back
        </Button>
      </div>
    </Container>
  );
};

export default ErrorPage;
