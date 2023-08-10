import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Header, Notifications } from "../components/layout";

const Layout = () => {
  return (
    <Container>
      <Header />
      <div>
        <Outlet />
      </div>
      <Notifications />
    </Container>
  );
};

export default Layout;
