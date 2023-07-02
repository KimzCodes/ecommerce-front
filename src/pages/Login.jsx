import { useEffect } from "react";
import { useFormik } from "formik";
import { loginSchema } from "../util/validationSchema";
import useAuth from "../hooks/use-auth";
import { Button, Form, Row, Col } from "react-bootstrap";

const Login = () => {
  const { loading, error, actType, login, resetUI } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      login(values);
    },
  });

  useEffect(() => {
    return () => resetUI();
  }, [resetUI]);

  return (
    <Row className="justify-content-md-center">
      <Col xs={6} span={3}>
        <h2 className="mt-3 mb-3">Login</h2>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              isInvalid={formik.touched.email && formik.errors.email}
            />

            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              isInvalid={formik.touched.password && formik.errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            disabled={actType === "login" && loading}
          >
            {actType === "login" && loading ? "Loading" : "Submit"}
          </Button>
          {actType === "login" && error ? (
            <div className="invalid-feedback d-block mt-4">{error}</div>
          ) : null}
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
