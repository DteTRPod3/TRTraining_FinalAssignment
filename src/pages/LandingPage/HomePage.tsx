import React, { useState } from "react";
import BackgroundCarousal from "../../components/Carousal/BackgroundCarousal";
import CarTypeBar from "../../components/CarTypeBar/CarTypeBar";
import FeatureCars from "../../components/FeatureCars/FeaturedCars";
import Searchbar from "../../components/Searchbar/Searchbar";

function HomePage() {
  const [carType, setCarType] = useState("");
  let activeType = "";
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
    console.log(activeType);
  };
  return (
    <>
      <CarTypeBar carType={carType} dispatchCarsByType={dispatchCarsByType} />
      <BackgroundCarousal />
      <Searchbar />
      <FeatureCars />
    </>
  );
}

export default HomePage;
