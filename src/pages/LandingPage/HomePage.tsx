import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackgroundCarousel from "../../components/Carousel/BackgroundCarousel";
import CarTypeBar from "../../components/CarTypeBar/CarTypeBar";
import FeatureCars from "../../components/FeatureCars/FeaturedCars";
import Searchbar from "../../components/Searchbar/Searchbar";
import { carTypeList } from "../../models/CarType";
import { getCars } from "../../redux/store/cars/actions";
import "./HomePage.scss";

function HomePage() {
  const dispatch = useDispatch();
  const [carTypeIndex, setCarTypeIndex] = useState(0);

  const dispatchCarsByType = (carTypeIndex: number) => {
    setCarTypeIndex(carTypeIndex);
  };

  useEffect(() => {
    dispatch(getCars(carTypeList[carTypeIndex]));
  }, [carTypeIndex]);

  const cars: any = useSelector((state: any) => state.cars.cars);

  return (
    <>
      <CarTypeBar
        carTypeIndex={carTypeIndex}
        dispatchCarsByType={dispatchCarsByType}
      />
      <div className="carousel">
        <BackgroundCarousel
          carTypeIndex={carTypeIndex}
          dispatchCarsByType={dispatchCarsByType}
        />
        <Searchbar />
      </div>
      <FeatureCars carTypeIndex={carTypeIndex} />
    </>
  );
}

export default HomePage;
