import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import Routes from "./components/Routes";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <Router>
      <Container className="NavbarComponent py-3">
        <NavbarComponent></NavbarComponent>
        <Routes />
      </Container>
    </Router>
  );
}

export default App;
