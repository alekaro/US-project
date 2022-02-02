import React, { useCallback, useState } from "react";
import { Form } from "react-bootstrap"
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useAppContext } from "../lib/contextLib";

const Login = () => {
  const { userHasAuthenticated } = useAppContext();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  function validateForm() {
    return login.length > 5 && password.length > 5;
  }


  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();

      await axios.post("/api/user/login", {
        login: login,
        password: password
      }).then((response) => {
        console.log(response);
        if("login" in response.data){
          localStorage.setItem('user_id', response.data.user_id)
          localStorage.setItem('token', response.data.login);
          userHasAuthenticated(!!localStorage.getItem('token'));
          navigate("/main");
        }
      }).catch((error) => {
        console.log(error);
      });

      setLogin("");
      setPassword("");
    },
    [login, password]
  );

  return (
    <div className="Login d-flex justify-content-center align-items-center">
      <Form className="rounded p-4 p-sm-3" onSubmit={handleSubmit}>
        <Form.Group size="lg mb-3" controlId="email">
          <Form.Label>Login</Form.Label>
          <Form.Control
            placeholder="Enter Login"
            autoFocus
            type="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Form.Text className="text-muted">Don't use any of your personal passwords... Not worth it.</Form.Text>
        </Form.Group>
        <div className="d-grid gap-2 py-3">
          <Button variant="primary" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;