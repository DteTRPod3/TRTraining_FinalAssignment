import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./TopNavbar.scss";

function TopNavbar() {
  return (
    <Navbar bg="dark" variant="dark" className="nav-container">
      <Navbar.Brand href="#home" className="logo">
        <h4>TR</h4>
        <p>adeurcar</p>
      </Navbar.Brand>
      <Container className="container">
        <Nav></Nav>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
