import React, { useEffect } from "react";
import { Form, Nav } from "react-bootstrap";

function Login() {
  useEffect(() => {
    document.title = "Xtreme Cars | Login Page";
  }, []);
  return (
    <div className="login-div">
      <Form>
        <Nav variant="tabs" fill>
          <Nav.Item>
            <Nav.Link>Login with Emial</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Login with Mobile Number</Nav.Link>
          </Nav.Item>
        </Nav>
        <Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Login;
