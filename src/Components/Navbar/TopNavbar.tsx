import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./TopNavbar.scss";
import { Link } from "react-router-dom";
// import carlogo from "../../Assets/car-logo.jpeg";

function TopNavbar() {
  return (
    <Navbar bg="black" variant="dark" className="nav-container" sticky="top">
      <Navbar.Brand href="/" className="logo">
        {/* <img src={carlogo} height="100%" width="30" alt="" /> */}
        <h5>TR</h5>
        <p>adeurcar</p>
      </Navbar.Brand>
      <Nav className="container2">
        <Link to="/cars" className="nav-link">
          New Cars
        </Link>
        <Nav.Link>Used Cars</Nav.Link>
        <Nav.Link id="profile">My Profile</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default TopNavbar;
