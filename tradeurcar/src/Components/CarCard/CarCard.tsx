import React, { useState } from "react";
import "./CarCard.scss";
import { Card } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
// import { CarDetails } from "../../Models/CarDetails";

function CarCard(car: any) {
  const [carDetails] = useState(JSON.parse(JSON.stringify(car)).car);

  return (
    <Card className="cardContainer">
      <Card.Img variant="top" src={carDetails.image} height={300} />
      <Card.Body>
        <Card.Title>{carDetails.name}</Card.Title>
        <Card.Text>
          {carDetails.price}akh onwards
          <ArrowRight />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CarCard;
