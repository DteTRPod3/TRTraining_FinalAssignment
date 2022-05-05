import React from "react";
import { Container, Image } from "react-bootstrap";
import bmw1 from "../../assets/bmwontop.jpg";
import bmw2 from "../../assets/BMW.jpg";
import "./Confirmation.scss";
import { Link, useLocation } from "react-router-dom";

function Confirmation() {
  const { car } = useLocation().state as any;
  const { formData } = useLocation().state as any;

  console.warn("print car", car);
  console.warn("print userdata in confirmation page", formData);
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
