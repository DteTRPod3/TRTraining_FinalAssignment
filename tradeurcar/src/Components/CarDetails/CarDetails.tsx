import React from "react";
import { useParams } from "react-router-dom";
import { CarFullDetails } from "../../Models/CarFullDetails";

function CarDetails() {
  let { id } = useParams();

  return <div>CarDetails</div>;
}

export default CarDetails;
