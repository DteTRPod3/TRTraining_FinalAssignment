import React, { useEffect } from "react";
import "./FeaturedCars.scss";
import { RootState } from "../../Redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { CarDetails } from "../../Models/CarDetails";
import { getCars } from "../../Redux/Store/Cars/actions";

function FeatureCars() {
  const dispatch = useDispatch();
  const cars: CarDetails[] = useSelector(
    (state: RootState) => JSON.parse(JSON.stringify(state.cars)).cars
  );
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);
  useEffect(() => {
    // console.log(cars);
    const randomElement = cars
      ?.sort(() => Math.random() - Math.random())
      .slice(0, 4);

    // cars && cars[Math.floor(Math.random() * cars?.length)];
    console.log(randomElement);
  }, [cars]);
  return <div>FeatureCars</div>;
}

export default FeatureCars;
