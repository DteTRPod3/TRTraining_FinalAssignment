import React from "react";
import BackgroundCarousal from "../Carousal/BackgroundCarousal";
import FeatureCars from "../FeatureCars/FeaturedCars";
import Searchbar from "../Searchbar/Searchbar";

function HomePage() {
  return (
    <React.Fragment>
      <BackgroundCarousal></BackgroundCarousal>
      <Searchbar></Searchbar>
      <FeatureCars></FeatureCars>
    </React.Fragment>
  );
}

export default HomePage;
