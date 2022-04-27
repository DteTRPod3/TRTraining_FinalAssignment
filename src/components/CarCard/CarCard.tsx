import React, { useState } from "react";
import "./CarCard.scss";
import { Card } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import Arrow from "../../assets/Arrow.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CarCard(car: any) {
  const [carDetails] = useState(JSON.parse(JSON.stringify(car)).car);
  const [id] = useState(carDetails.id);
  const detailsPageLink = "/cardetails/" + id;

  const navigate = useNavigate();
  const redirect = () => {
    navigate(detailsPageLink);
  };

  return (
    <div className="transition" onClick={redirect}>
      <Card className="cardContainer ">
        <Card.Img
          variant="top"
          data-testid="carimg"
          src={carDetails.image}
          height={200}
        />
        <Card.Body>
          <Card.Title data-testid="cardetail">{carDetails.name}</Card.Title>
          <Card.Text className="font-styles " data-testid="cardprice">
            {carDetails.price}akh onwards
            <Link to={detailsPageLink}>
              <img src={Arrow} alt="rightArrow" />
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CarCard;
