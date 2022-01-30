import React, { useCallback, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
// import "./Login.css";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return login.length > 5 && password.length > 5;
  }

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();

      await axios.post("/api/user/login", {
        login
      });

      setLogin("");
    },
    [login]
  );

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Login</Form.Label>
          <Form.Control
            autoFocus
            type="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;