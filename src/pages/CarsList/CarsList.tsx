import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import CarCard from "../../components/CarCard/CarCard";
import { useQuery } from "../../hooks/useQuery";
import { CarDetails } from "../../models/CarDetails";
import { carTypeList } from "../../models/CarType";
import {
  getCars,
  getMoreCars,
  resetCars,
} from "../../redux/store/cars/actions";
import InfiniteScroll from "react-infinite-scroll-component";
import sadEmoji from "../../assets/sad-emoji.svg";
import "./CarsList.scss";
import Loader from "../../components/Loader/Loader";
import EndMessage from "../../components/EndMessage/EndMessage";

function CarsList() {

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const query = useQuery();
  const [carType, setCarType] = useState<number>(3);
  const cars: any = useSelector((state: any) => state.cars.cars);
  const [carNameToBeSearched, setCarNameToBeSearched] = useState("");
  const [isUsed, setIsUsed] = useState<boolean | null>(null); 
  const { from }: any = location.state == null ? "" : (location.state as any);

  useEffect(() => {
    document.title = "Xtreme Cars | All Cars";
    const typeParam = query?.get("car-type");
    const searchParam = query?.get("search-text");
    const usedParam = query?.get("used");
    switch (typeParam) {
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
    switch(usedParam) {
      case "true":
        setIsUsed(true);
        break;
      case "false":
        setIsUsed(false);
        break;
      default:
        setIsUsed(null);
        break;
    }
    if(searchParam !== null && searchParam !== "") {
      setCarType(4);
      setCarNameToBeSearched(searchParam);
    }
  }, []);

  useEffect(() => {
    if (from !== undefined) {
      setCarType(3);
      setCarNameToBeSearched("");
      if(from === "new_cars") setIsUsed(false);
      else if(from === "used_cars") setIsUsed(true);
      else setIsUsed(null);
    }
  }, [from]);

  useEffect(() => {
    if (carType === 4) {
      navigate(`/cars?search-text=${carNameToBeSearched}`);
      dispatch(getCars("", null));
    }
    else if (carType === 3) {
      if(isUsed === null) {
        navigate(`/cars?`);
      }
      else {
        navigate(`/cars?used=${isUsed}`);
      }
      dispatch(resetCars());
      dispatch(getCars("", isUsed));
    }
    else {
      if(isUsed === null) {
        navigate(`/cars?car-type=${carTypeList[carType]}`);
      }
      else {
        navigate(`/cars?car-type=${carTypeList[carType]}&used=${isUsed}`);
      }
      dispatch(resetCars());
      dispatch(getCars(carTypeList[carType], isUsed));
    }
  }, [dispatch, carType, isUsed, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  let fetchMoreData = () => {
    setTimeout(() => {
      if (carType == 3) dispatch(getMoreCars("", isUsed));
      else dispatch(getMoreCars(carTypeList[carType], isUsed));
    }, 2000);
  };

  return (
    <>
      <ButtonGroup className="mb-2">
        <Button
          className={`${carType === 3 ? "active-tab" : ""}`}
          onClick={() => {
            setCarType(3);
            setCarNameToBeSearched("");
          }}
        >
          View All
        </Button>
        <Button
          className={`${carType === 0 ? "active-tab" : ""}`}
          onClick={() => {
            setCarType(0);
            setCarNameToBeSearched("");
          }}
        >
          Sedan
        </Button>
        <Button
          className={`${carType === 1 ? "active-tab" : ""}`}
          onClick={() => {
            setCarType(1);
            setCarNameToBeSearched("");
          }}
        >
          SUV
        </Button>
        <Button
          className={`${carType === 2 ? "active-tab" : ""}`}
          onClick={() => {
            setCarType(2);
            setCarNameToBeSearched("");
          }}
        >
          Hatchback
        </Button>
      </ButtonGroup>
      {(<p className="result-count" data-testid="resultcount">
          {
            cars?.filter((car: CarDetails) =>
              car.name
                .toLowerCase()
                .includes(carNameToBeSearched?.toLowerCase())
            )?.length
          }{" "}
          total results
        </p>
      )}
      <Container className="carsContainer">
        {carType !== 4 && (cars === undefined || cars?.length === 0) && <div id="no-cars">No Cars Available</div>}
        {carType === 4 &&
          cars?.filter((car: CarDetails) =>
            car.name.toLowerCase().includes(carNameToBeSearched?.toLowerCase())
          )?.length === 0 && (
            <div className="sorry-message">
              <p>Sorry, the car you have searched is not available</p>
              <img src={sadEmoji} alt="Sad smiley face" width={200}></img>
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
        {carType !== 4 && cars?.length !== 0 &&
          <InfiniteScroll
            dataLength={cars === undefined ? 1 : cars?.length}
            next={fetchMoreData}
            hasMore={cars?.length < 101}
            loader={<Loader />}
            endMessage={<EndMessage />}
          >
            <div className="carsContainer">
              {cars?.map((car: CarDetails, index: number) => (
                <CarCard key={index} id={car?.id} car={car} />
              ))}
            </div>
          </InfiniteScroll>
        }
      </Container>
    </>
  );
}
export default CarsList;
