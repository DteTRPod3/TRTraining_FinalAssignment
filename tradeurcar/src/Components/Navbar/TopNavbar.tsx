import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./TopNavbar.scss";

function TopNavbar() {
  return (
    <Navbar bg="black" variant="dark" className="nav-container" fixed="top">
      <Navbar.Brand href="#home" className="logo">
        <h4>TR</h4>
        <p>adeurcar</p>
      </Navbar.Brand>
      {/* <div className="container2"> */}
      <Nav className="container2">
        <Nav.Link>New Cars</Nav.Link>
        <Nav.Link>Used Cars</Nav.Link>
        <Nav.Link id="profile">My Profile</Nav.Link>
      </Nav>
      {/* </div> */}
    </Navbar>
  );
}

export default TopNavbar;
