import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import crossIcon from "../../assets/crossIcon.svg";
import BackgroundCarousel from "../../components/Carousel/BackgroundCarousel";
import CarTypeBar from "../../components/CarTypeBar/CarTypeBar";
import FeatureCars from "../../components/FeatureCars/FeaturedCars";
import Searchbar from "../../components/Searchbar/Searchbar";
import "./HomePage.scss";

function HomePage() {
  const [carTypeIndex, setCarTypeIndex] = useState(0);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    document.title = "Xtreme Cars";
  }, []);

  const dispatchCarsByType = (carTypeIndex: number) => {
    setCarTypeIndex(carTypeIndex);
  };

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
        <div className="cross-img-left">
          <img src={crossIcon} alt="cross-icon-right" />
        </div>
        <div className="cross-img-right">
          <img src={crossIcon} alt="cross-icon-right" />
        </div>
      </div>
      <FeatureCars carTypeIndex={carTypeIndex} />
    </>
  );
}

export default HomePage;
