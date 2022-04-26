import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CarDetails } from "../../models/CarDetails";
import { RootState } from "../../Redux/configureStore";
import { getCars } from "../../Redux/Store/Cars/actions";
import CarCard from "../CarCard/CarCard";
import "./CarsList.scss";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function CarsList() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchtext] = useState<string>(
    location.state === null ? "" : (location.state as string)
  );

  const [carType, SetCarType] = useState<string>(
    ["sedan", "SUV", "hatchback", "coupe"].includes(
      JSON.parse(JSON.stringify(searchtext)).searchtext as string
    )
      ? (JSON.parse(JSON.stringify(searchtext)).searchtext as string)
      : ""
  );
  const cars: CarDetails[] = useSelector(
    (state: RootState) => JSON.parse(JSON.stringify(state.cars)).cars
  );

  useEffect(() => {
    dispatch(getCars(carType));
  }, [dispatch, carType]);

  return (
    <React.Fragment>
      <ButtonGroup className="mb-2">
        <Button variant="secondary" onClick={() => SetCarType("")}>
          View All
        </Button>
        <Button variant="secondary" onClick={() => SetCarType("sedan")}>
          Sedan
        </Button>
        <Button variant="secondary" onClick={() => SetCarType("SUV")}>
          SUV
        </Button>
        <Button variant="secondary" onClick={() => SetCarType("hatchback")}>
          Hatchback
        </Button>
        <Button variant="secondary" onClick={() => SetCarType("coupe")}>
          Coupe
        </Button>
      </ButtonGroup>
      <Container className="carsContainer">
        {cars?.length === 0 && <div id="nocars">No Cars Available</div>}
        {cars?.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </Container>
    </React.Fragment>
  );
}

export default CarsList;
