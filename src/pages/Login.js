import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Login() {
  let email = "";
  let password = "";
  const dispatch = useDispatch();
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    let user = { email: email, password: password };
    dispatch({ type: "LOGIN", payload: user });
    history.goBack();
  };
  return (
    <div className="App">
      <div className="navigation">
        <Container>
          <img
            className="logo-itviec"
            alt="itviec"
            src="https://itviec.com/assets/logo-itviec-65afac80e92140efa459545bc1c042ff4275f8f197535f147ed7614c2000ab0f.png"
          />
        </Container>
      </div>
      <Container className="middle">
        <Form className="white-container" onSubmit={(e) => login(e)}>
          <div className="login-title-box">
            <img src="https://itviec.com/favicon-96x96.png" width="40px" />
            <h1 className="login-title">Login</h1>
          </div>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => (email = e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => (password = e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
