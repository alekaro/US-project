import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./NavbarComponent.css";

const NavbarComponent = () => {
  return (
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <Navbar.Brand className="font-weight-bold text-muted">
            Scratch
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default NavbarComponent;