import { Row, Col } from "react-bootstrap";
import { Outlet, NavLink, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <Row className="mt-5">
      <Col md={3}>
        <div className="list-group">
          <NavLink
            to="account"
            className={({ isActive }) =>
              isActive || location.pathname === "/profile"
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action"
            }
          >
            Your Account Info
          </NavLink>
          <NavLink
            to="orders"
            className={({ isActive }) =>
              isActive
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action"
            }
          >
            Order History
          </NavLink>
        </div>
      </Col>
      <Col>
        <Outlet />
      </Col>
    </Row>
  );
};

export default Layout;
