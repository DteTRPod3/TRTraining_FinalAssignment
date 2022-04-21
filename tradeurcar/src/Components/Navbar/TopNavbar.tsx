import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./TopNavbar.scss";
import { Link } from "react-router-dom";

function TopNavbar() {
  return (
    <Navbar bg="black" variant="dark" className="nav-container" sticky="top">
      <Navbar.Brand href="/" className="logo">
        <h4>TR</h4>
        <p>adeurcar</p>
      </Navbar.Brand>
      {/* <div className="container2"> */}
      <Nav className="container2">
        <Link to="/cars" className="nav-link">
          New Cars{" "}
        </Link>

        <Nav.Link>Used Cars</Nav.Link>
        <Nav.Link id="profile">My Profile</Nav.Link>
      </Nav>
      {/* </div> */}
    </Navbar>
  );
}

export default TopNavbar;
