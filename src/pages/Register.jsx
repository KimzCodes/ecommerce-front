import { Button, Form, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { registerSchema } from "../util/validationSchema";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
      passwordConf: "",
    },
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: registerSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Row className="justify-content-md-center">
      <Col xs={6} span={3}>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="fname">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="fname"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fname}
              isInvalid={formik.touched.fname && formik.errors.fname}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.fname}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="lname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lname"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lname}
              isInvalid={formik.touched.lname && formik.errors.lname}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.lname}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
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

          <Form.Group className="mb-3" controlId="password">
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

          <Form.Group className="mb-3" controlId="passwordConf">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="passwordConf"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.passwordConf}
              isInvalid={
                formik.touched.passwordConf && formik.errors.passwordConf
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.passwordConf}
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

export default Register;
