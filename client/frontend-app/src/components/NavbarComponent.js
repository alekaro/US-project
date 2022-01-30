import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Container } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap"; 
import { Link } from "react-router-dom"
import "./NavbarComponent.css";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login page</Nav.Link>
            </LinkContainer> */}
            <Link to="/">Home</Link>
            <Link to="/login">Login page</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;