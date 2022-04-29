import React, { useState } from "react";
import "./CarCard.scss";
import { Card } from "react-bootstrap";
import Arrow from "../../assets/Arrow.svg";
import { Link } from "react-router-dom";

function CarCard(car: any) {
  const [carDetails] = useState(JSON.parse(JSON.stringify(car)).car);
  const [id] = useState(carDetails.id);
  const detailsPageLink = "/car_details/" + id;
  return (
    <Link to={detailsPageLink} className="card-container">
      <Card>
        <Card.Img
          variant="top"
          data-testid="carimg"
          src={carDetails.image}
          height={200}
        />
        <Card.Body>
          <Card.Title className="card-title" data-testid="cardetail">
            {carDetails.name}
          </Card.Title>
          <Card.Text data-testid="cardprice">
            {carDetails.price}akh onwards
            <img src={Arrow} alt="arrow icon"></img>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default CarCard;
