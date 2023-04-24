import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../util/validationSchema";
import { useDispatch } from "react-redux";
import { login } from "../store/auth/authSlice";
import { Button, Form, Row, Col } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(login(values))
        .unwrap()
        .then(() => {
          navigate("/");
        });
    },
  });
  return (
    <Row className="justify-content-md-center">
      <Col xs={6} span={3}>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="name"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              isInvalid={formik.touched.email && formik.errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
