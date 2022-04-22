import React from "react";
import { Routes, Route } from "react-router-dom";
import Booking from "../Booking/Booking";
import Confirmation from "../BookingConfirmation/Confirmation";
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
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/booking_confirmation" element={<Confirmation />} />
        <Route element={<HomePage />} />
        DefaultRoute
      </Routes>
    </div>
  );
}

export default RouterComponent;
