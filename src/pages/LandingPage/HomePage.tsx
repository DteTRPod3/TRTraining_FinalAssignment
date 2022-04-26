import React from "react";
import BackgroundCarousal from "../../components/Carousal/BackgroundCarousal";
import FeatureCars from "../../components/FeatureCars/FeaturedCars";
import Searchbar from "../../components/Searchbar/Searchbar";

function HomePage() {
  return (
    <>
      <BackgroundCarousal/>
      <Searchbar/>
      <FeatureCars/>
    </>
  );
}

export default HomePage;
