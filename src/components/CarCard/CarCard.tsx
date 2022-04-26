import React, { useState } from "react";
import "./CarCard.scss";
import { Card } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function CarCard(car: any) {
  const [carDetails] = useState(JSON.parse(JSON.stringify(car)).car);
  const [id] = useState(carDetails.id);
  const detailsPageLink = "/cardetails/" + id;
  return (
    <Card className="cardContainer">
      <Card.Img variant="top" src={carDetails.image} height={200} />
      <Card.Body>
        <Card.Title>{carDetails.name}</Card.Title>
        <Card.Text>
          {carDetails.price}akh onwards
          <Link to={detailsPageLink}>
            <ArrowRight />
          </Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CarCard;
