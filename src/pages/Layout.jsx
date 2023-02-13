import { Outlet } from "react-router-dom";

import { Container } from "react-bootstrap";
import { Header, Notifications } from "../components/Layout";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Notifications />
      <div>
        <Outlet />
      </div>
    </Container>
  );
};

export default Layout;
