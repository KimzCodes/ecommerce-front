import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Header, NotificationsHandler } from "../components/layout";

const Layout = () => {
  return (
    <Container>
      <Header />
      <div>
        <Outlet />
      </div>
      <NotificationsHandler />
    </Container>
  );
};

export default Layout;
