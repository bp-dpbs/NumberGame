import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const linkStyle = {
  margin: "0 15px",
  textDecoration: "none",
}

export const NavigationPanel = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#">Let's play with Numbers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={linkStyle}>Home</Nav.Link>
            <Nav.Link href="/game" style={linkStyle}>Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
