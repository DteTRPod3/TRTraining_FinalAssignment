import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import CarCard from "../../components/CarCard/CarCard";
import { useQuery } from "../../hooks/useQuery";
import { CarDetails } from "../../models/CarDetails";
import { carTypeList } from "../../models/CarType";
import { getCars, getMoreCars, resetCars } from "../../redux/store/cars/actions";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../../components/Loader/Loader";
import EndMessage from "../../components/EndMessage/EndMessage";

function NewCarsList() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const query = useQuery();
  const [carType, setCarType] = useState<number>(3);
  const cars: any = useSelector((state: any) => state.cars.cars);
  const { from }: any = location.state == null ? "" : (location.state as any);

  useEffect(() => {
    document.title = "Xtreme Cars | New Cars";
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
    if (from === "new-cars") setCarType(3);
  }, [from]);

  useEffect(() => {
    if (carType === 3) {
      dispatch(resetCars());
      dispatch(getCars(""));
    } else {
      navigate(`/new_cars?car-type=${carTypeList[carType]}`);
      dispatch(resetCars());
      dispatch(getCars(carTypeList[carType]));
    }
  }, [dispatch, carType, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  let fetchMoreData = () => {
    setTimeout(() => {
      if (carType == 3) dispatch(getMoreCars(""));
      else dispatch(getMoreCars(carTypeList[carType]));
    }, 2000);
  };

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
      <p className="result-count" data-testid="resultcount">
        {cars?.length} total results
      </p>
      <Container className="carsContainer">
        {cars === undefined || cars?.length === 0 ? (
          <div id="no-cars">No Cars Available</div>
        ) : (
          <InfiniteScroll
            dataLength={cars?.length}
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
        )}
      </Container>
    </>
  );
}
export default NewCarsList;
