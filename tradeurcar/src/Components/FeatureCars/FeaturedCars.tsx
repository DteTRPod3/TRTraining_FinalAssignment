import React, { useEffect, useState } from "react";
import "./FeaturedCars.scss";
import { RootState } from "../../Redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { CarDetails } from "../../Models/CarDetails";
import { getCars } from "../../Redux/Store/Cars/actions";
import CarCard from "../CarCard/CarCard";
import { Button, ButtonGroup } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function FeatureCars() {
  const dispatch = useDispatch();

  const cars: CarDetails[] = useSelector(
    (state: RootState) => JSON.parse(JSON.stringify(state.cars)).cars
  );

  useEffect(() => {
    dispatch(getCars(""));
  }, [dispatch]);

  const featuredCars = cars
    ?.sort(() => Math.random() - Math.random())
    .slice(0, 4);

  return (
    <div className="maindiv">
      <h6>Featured Cars</h6>
      <ButtonGroup className="mb-2">
        <Button variant="dark">Popular</Button>
        <Button variant="dark" disabled>
          Just Launched
        </Button>
        <Button variant="dark" disabled>
          Upcoming
        </Button>
        <Link className="viewLink nav-link" to="/cars">
          View All
          <ArrowRight />
        </Link>
      </ButtonGroup>
      <div className="cardslist">
        {featuredCars?.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default FeatureCars;
