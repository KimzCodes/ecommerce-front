import Lottie from "lottie-react";
import { useRouteError } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import errorPage from "../assets/lottie/errorPage.json";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Container>
      <div className="notFound">
        <Lottie
          animationData={errorPage}
          style={{ maxWidth: "500px", margin: "0 auto" }}
        />

        <h1>{error.status}</h1>
        <p>{error.statusText}</p>

        <Button variant="link">Go Back</Button>
      </div>
    </Container>
  );
};

export default ErrorPage;
