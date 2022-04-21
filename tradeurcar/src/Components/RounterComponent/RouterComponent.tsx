import React from "react";
import { Routes, Route } from "react-router-dom";
import CarDetails from "../CarDetails/CarDetails";
import CarsList from "../CarsList/CarsList";
import HomePage from "../LandingPage/HomePage";

function RouterComponent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarsList />} />
        <Route path="/cardetails/:id" element={<CarDetails />} />
      </Routes>
    </div>
  );
}

export default RouterComponent;
