import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import trolley from "../img/trolley.svg";

export default function Navbarr() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ fontWeight: "bold", color: "#fff" }}
          >
            <Link to="/" style={{ color: "#fff" }}>
              FoodCal
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">
                <Link to="/" style={{ color: "#fff" }}>
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <Link to="/menu" style={{ color: "#fff" }}>
                  Menu
                </Link>
              </Nav.Link>
              <NavDropdown title="About us" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Contact us
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">About us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <Link to="/card" style={{ color: "#fff" }}>
                  <img src={trolley} style={{ height: "32px" }} alt="trolley" />
                </Link>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Link to="/" style={{ color: "#fff" }}>
                  Login/Signup
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
