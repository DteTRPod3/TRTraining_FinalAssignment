import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Booking from "../../pages/Booking/Booking";
import Confirmation from "../../pages/BookingConfirmation/Confirmation";
import CarDetails from "../../pages/CarDetails/CarDetails";
import CarsList from "../../pages/CarsList/CarsList";
import HomePage from "../../pages/LandingPage/HomePage";
import NotFound from "../../pages/NotFound/NotFound";

function RouterComponent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cars" element={<CarsList />} />
        <Route path="/cardetails/:id" element={<CarDetails />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/booking_confirmation" element={<Confirmation />} />
        <Route path="/page_notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/page_notfound" />} />
        DefaultRoute
      </Routes>
    </div>
  );
}

export default RouterComponent;
