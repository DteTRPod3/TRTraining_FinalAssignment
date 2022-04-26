import React from "react";
import { Container, Image } from "react-bootstrap";
import bmw1 from "../../assets/bmwontop.jpg";
import bmw2 from "../../assets/BMW.jpg";
import "./Confirmation.scss";
import { Link } from "react-router-dom";

function Confirmation() {
  return (
    <Container>
      <div className="topdiv">
        <Image src={bmw1} />
        <h3>Booking Successful</h3>
        <br />
        <h5>
          <Link to="/">Go Home</Link>
        </h5>
      </div>
      <div className="bottomdiv">
        <Image src={bmw2} />
      </div>
    </Container>
  );
}

export default Confirmation;
