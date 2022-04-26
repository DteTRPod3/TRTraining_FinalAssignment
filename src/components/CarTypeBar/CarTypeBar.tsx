import React from "react";
import "./CarTypeBar.scss";
const CarTypeBar = ({ carType, dispatchCarsByType }: any) => {
  return (
    <div className="carTypeBar">
      <div className={carType === "sedan" ? "activeCarType" : ""}>
        <h4
          onClick={() => {
            dispatchCarsByType("sedan");
          }}
        >
          Sedan
        </h4>
      </div>

      <div className={carType === "SUV" ? "activeCarType" : ""}>
        <h4
          onClick={() => {
            dispatchCarsByType("SUV");
          }}
          className="itemBorder"
        >
          SUV
        </h4>
      </div>

      <div className={carType === "hatchback" ? "activeCarType" : ""}>
        <h4
          onClick={() => {
            dispatchCarsByType("hatchback");
          }}
          className="itemBorder"
        >
          Hatchback
        </h4>
      </div>
    </div>
  );
};

export default CarTypeBar;
