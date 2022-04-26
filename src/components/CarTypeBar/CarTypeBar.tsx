import React from "react";
import "./CarTypeBar.scss";
const CarTypeBar = ({ carTypeIndex, dispatchCarsByType }: any) => {
  return (
    <div className="carTypeBar">
      <div className={carTypeIndex === 0 ? "activeCarType" : ""}>
        <div className="span-width">
          <span
            onClick={() => {
              dispatchCarsByType(0);
            }}
          >
            Sedan
          </span>
        </div>
      </div>

      <div className={carTypeIndex === 1 ? "activeCarType" : ""}>
        <div className="span-width">
          <span
            onClick={() => {
              dispatchCarsByType(1);
            }}
            className="itemBorder"
          >
            SUV
          </span>
        </div>
      </div>

      <div className={carTypeIndex === 2 ? "activeCarType" : ""}>
        <div className="span-width">
          <span
            onClick={() => {
              dispatchCarsByType(2);
            }}
            className="itemBorder"
          >
            Hatchback
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarTypeBar;
