import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import CarCard from "../../components/CarCard/CarCard";
import { useQuery } from "../../hooks/useQuery";
import { CarDetails } from "../../models/CarDetails";
import { carTypeList } from "../../models/CarType";
import { getCars } from "../../redux/store/cars/actions";
import sademoji from "../../assets/sad-emoji.svg";
import "./CarsList.scss";

function CarsList() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const query = useQuery();
  const [carType, setCarType] = useState<number>(3);
  const cars: any = useSelector((state: any) => state.cars.cars);
  const { searchtext }: any = location.state == null ? "" : location.state;
  const [carNameToBeSearched] = useState(searchtext == null ? "" : searchtext);

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
        setCarType(searchtext == null || undefined ? 3 : 4);
        break;
    }
  }, []);

  useEffect(() => {
    if (carType === 3 || carType === 4) {
      navigate("/cars");
      dispatch(getCars(""));
    } else {
      navigate("/cars?car-type=" + carTypeList[carType]);
      dispatch(getCars(carTypeList[carType]));
    }
  }, [dispatch, carType, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <ButtonGroup className="mb-2">
        <Button
          className={`${carType === 3 ? "active-tab" : ""}`}
          onClick={() => {
            setCarType(3);
          }}
        >
          View All
        </Button>
        <Button
          className={`${carType === 0 ? "active-tab" : ""}`}
          onClick={() => {
            setCarType(0);
          }}
        >
          Sedan
        </Button>
        <Button
          className={`${carType === 1 ? "active-tab" : ""}`}
          onClick={() => {
            setCarType(1);
          }}
        >
          SUV
        </Button>
        <Button
          className={`${carType === 2 ? "active-tab" : ""}`}
          onClick={() => {
            setCarType(2);
          }}
        >
          Hatchback
        </Button>
      </ButtonGroup>
      <Container className="carsContainer">
        {cars?.length === 0 && <div id="nocars">No Cars Available</div>}
        {carType === 4 &&
          cars?.filter((car: CarDetails) =>
            car.name.toLowerCase().includes(carNameToBeSearched?.toLowerCase())
          )?.length === 0 && (
            <div className="sorry-message">
              <p> Sorry, the car you have searched is not available</p>
              <img src={sademoji} alt="coming soon..." width={200}></img>
            </div>
          )}
        {carType === 4 &&
          cars
            ?.filter((car: CarDetails) =>
              car.name
                .toLowerCase()
                .includes(carNameToBeSearched?.toLowerCase())
            )
            ?.map((car: CarDetails) => <CarCard key={car.id} car={car} />)}
        {carType !== 4 &&
          cars?.map((car: CarDetails) => <CarCard key={car.id} car={car} />)}
      </Container>
    </>
  );
}
export default CarsList;
