import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import Routes from "./components/Routes";
import NavbarComponent from "./components/NavbarComponent";

function App() {

  return (
    <Router>
      <Container className="MainPage py-3">
        <NavbarComponent />
        <Routes />
      </Container>
    </Router>
  );
}

export default App;
