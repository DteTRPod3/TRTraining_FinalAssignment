import React from "react";
import { Routes, Route } from "react-router-dom";
import Booking from "../Booking/Booking";
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
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default RouterComponent;
