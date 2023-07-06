import { useEffect } from "react";
import { useFormik } from "formik";
import useAuth from "../../hooks/use-auth";
import { updateAccountSchema } from "../../util/validationSchema";
import { Button, Form, Row, Col } from "react-bootstrap";

const AccountUpdate = () => {
  const { loading, error, actType, resetUI } = useAuth();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConf: "",
    },
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: updateAccountSchema,
    onSubmit: (values) => {},
  });

  return (
    <Row>
      <Col md={7}>
        <h2 className="mt-3 mb-3">Update Information:</h2>

        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              isInvalid={formik.touched.firstName && formik.errors.firstName}
              autoComplete="off"
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              isInvalid={formik.touched.lastName && formik.errors.lastName}
              autoComplete="off"
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.lastName}
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

          <Button
            variant="primary"
            type="submit"
            disabled={actType === "register" && loading}
          >
            {actType === "register" && loading ? "Loading" : "Submit"}
          </Button>
          {actType === "register" && error ? (
            <div className="invalid-feedback d-block mt-4">{error}</div>
          ) : null}
        </Form>
      </Col>
    </Row>
  );
};

export default AccountUpdate;
