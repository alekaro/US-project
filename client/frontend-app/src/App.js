import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import RoutesComponent from "./components/RoutesComponent";
import NavbarComponent from "./components/NavbarComponent";
import { AppContext } from "./lib/contextLib";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(!!localStorage.getItem('token'));

  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <Router>
        <Container className="MainPage py-3">
          <NavbarComponent />
          <RoutesComponent />
        </Container>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
