import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CarDetails } from "../../Models/CarDetails";
import { RootState } from "../../Redux/configureStore";
import { getCars } from "../../Redux/Store/Cars/actions";
import CarCard from "../CarCard/CarCard";
import "./CarsList.scss";
import { Button, ButtonGroup, Container } from "react-bootstrap";

function CarsList() {
  const dispatch = useDispatch();

  const cars: CarDetails[] = useSelector(
    (state: RootState) => JSON.parse(JSON.stringify(state.cars)).cars
  );

  useEffect(() => {
    dispatch(getCars(""));
  }, [dispatch]);

  const handleViewAll = () => {
    dispatch(getCars(""));
  };
  const handleSedanClick = () => {
    dispatch(getCars("sedan"));
  };
  const handleSUVClick = () => {
    dispatch(getCars("suv"));
  };
  const handleHatchbackClick = () => {
    dispatch(getCars("hatchback"));
  };
  const handleCoupeClick = () => {
    dispatch(getCars("coupe"));
  };

  return (
    <React.Fragment>
      <ButtonGroup className="mb-2">
        <Button variant="secondary" onClick={handleViewAll}>
          View All
        </Button>
        <Button variant="secondary" onClick={handleSedanClick}>
          Sedan
        </Button>
        <Button variant="secondary" onClick={handleSUVClick}>
          SUV
        </Button>
        <Button variant="secondary" onClick={handleHatchbackClick}>
          Hatchback
        </Button>
        <Button variant="secondary" onClick={handleCoupeClick}>
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
