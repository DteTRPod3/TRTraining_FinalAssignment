import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackgroundCarousal from "../../components/Carousal/BackgroundCarousal";
import CarTypeBar from "../../components/CarTypeBar/CarTypeBar";
import FeatureCars from "../../components/FeatureCars/FeaturedCars";
import Searchbar from "../../components/Searchbar/Searchbar";
import { CarDetails } from "../../models/CarDetails";
import { RootState } from "../../redux/configureStore";
import { getCars } from "../../redux/store/cars/actions";
import "./HomePage.scss"

function HomePage() {
  
  const dispatch = useDispatch();
  const [carType, setCarType] = useState("sedan");

  const dispatchCarsByType = (carType: string) => {
    if (carType === "sedan") {
      setCarType("sedan");
    } else if (carType === "SUV") {
      setCarType("SUV");
    } else if (carType === "hatchback") {
      setCarType("hatchback");
    } else {
      setCarType("");
    }
  };

  useEffect(() => {
    dispatch(getCars(carType));
  }, [carType]);

  const cars: CarDetails[] = useSelector(
      (state: RootState) => JSON.parse(JSON.stringify(state.cars)).cars
    );

  return (
    <>
      <CarTypeBar carType={carType} dispatchCarsByType={dispatchCarsByType} />
      <div className="carasouel">
        <BackgroundCarousal carType={carType} dispatchCarsByType={dispatchCarsByType} />
        <Searchbar />
      </div>
      <FeatureCars featuredCars={cars}/>
    </>
  );
}

export default HomePage;
function dispatch(arg0: { type: string; carType: string; }) {
  throw new Error("Function not implemented.");
}

