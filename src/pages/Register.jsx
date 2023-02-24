import { Button, Form, Row, Col } from "react-bootstrap";

const Register = () => {
  return (
    <Row className="justify-content-md-center">
      <Col xs={6} span={3}>
        <Form>
          <Form.Group className="mb-3" controlId="fname">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="lname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="confpassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" />
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
