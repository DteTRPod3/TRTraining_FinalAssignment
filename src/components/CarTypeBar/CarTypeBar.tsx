import React from "react";
import "./CarTypeBar.scss";
const CarTypeBar = ({ carTypeIndex, dispatchCarsByType }: any) => {
  return (
    <div className="carTypeBar">
      <div className={carTypeIndex === 0 ? "activeCarType" : ""}>
        <h4
          onClick={() => {
            dispatchCarsByType(0);
          }}
        >
          Sedan]
        </h4>
      </div>

      <div className={carTypeIndex === 1 ? "activeCarType" : ""}>
        <h4
          onClick={() => {
            dispatchCarsByType(1);
          }}
          className="itemBorder"
        >
          SUV
        </h4>
      </div>

      <div className={carTypeIndex === 2 ? "activeCarType" : ""}>
        <h4
          onClick={() => {
            dispatchCarsByType(2);
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
