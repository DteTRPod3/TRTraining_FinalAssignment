import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import CarCard from "../../components/CarCard/CarCard";
import { useQuery } from "../../hooks/useQuery";
import { CarDetails } from "../../models/CarDetails";
import { carTypeList } from "../../models/CarType";
import { getCars } from "../../redux/store/cars/actions";
import "./CarsList.scss";
function CarsList() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const query = useQuery();
  const [carType, setCarType] = useState<number>(3);
  useEffect(() => {
    document.title = "Xtreme Cars | All Cars";
    if (query.get("car-type") === null) navigate("*");
    let params = query?.get("car-type");
    switch (params) {
      case "sedan":
        setCarType(0);
        break;
      case "SUV":
        setCarType(1);
        break;
      case "hatchback":
        setCarType(2);
        break;
      default:
        setCarType(3);
        break;
    }
  }, []);
  useEffect(() => {
    if (carType == 3) navigate("/cars");
    else navigate("/cars?car-type=" + carTypeList[carType]);
    dispatch(getCars(carTypeList[carType]));
  }, [dispatch, carType]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const cars: any = useSelector((state: any) => state.cars.cars);
  return (
    <>
      <ButtonGroup className="mb-2">
        <Button onClick={() => setCarType(3)} autoFocus={true}>
          View All
        </Button>
        <Button onClick={() => setCarType(0)}>Sedan</Button>
        <Button onClick={() => setCarType(1)}>SUV</Button>
        <Button onClick={() => setCarType(2)}>Hatchback</Button>
      </ButtonGroup>
      <Container className="carsContainer">
        {cars?.length === 0 && <div id="nocars">No Cars Available</div>}
        {cars?.map((car: CarDetails) => (
          <CarCard key={car.id} car={car} />
        ))}
      </Container>
    </>
  );
}
export default CarsList;
