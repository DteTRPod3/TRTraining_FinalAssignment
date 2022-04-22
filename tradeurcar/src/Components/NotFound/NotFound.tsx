import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NotFound.scss";

function NotFound() {
  return (
    <Container className="notfoundContainer">
      <h4>Route Not Found</h4>
      <br />
      <Link to="/home">
        <h6>Go Home</h6>
      </Link>
    </Container>
  );
}

export default NotFound;
