import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Header } from "../components/layout";

const Layout = () => {
  return (
    <Container>
      <Header />
      <div>
        <Outlet />
      </div>
    </Container>
  );
};

export default Layout;