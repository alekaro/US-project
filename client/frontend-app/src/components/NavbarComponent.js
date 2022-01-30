import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./NavbarComponent.css";


const NavbarComponent = () => {
  return (
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <Navbar.Brand className="font-weight-bold text-muted mx-4">
            Scratch
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <Link to="/signup">
              <Navbar.Brand className="font-weight-bold text-muted">
                Sign up
              </Navbar.Brand>
            </Link>
            <Link className="customLink" to="/login">
              <Navbar.Brand className="font-weight-bold text-muted">
                Login
              </Navbar.Brand>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default NavbarComponent;