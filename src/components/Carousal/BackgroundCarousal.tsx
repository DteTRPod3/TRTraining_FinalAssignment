import React from "react";
import { Carousel, Image } from "react-bootstrap";
import SEDAN from "../../assets/SEDAN.jpg";
import SUV from "../../assets/SUV.jpg";
import HATCHBACK from "../../assets/HATCHBACK.jpg";
import "./BackgroundCarousal.scss";

function BackgroundCarousal({ carType, dispatchCarsByType }: any) {

  let index = ((carType === "sedan") ? 0 : ((carType === "SUV") ? 1 : 2)) || 0;

  let onSelectHandler = (selectedIndex: number) => {
    switch (selectedIndex) {
      case 0:
        dispatchCarsByType("sedan");
        break;
      case 1:
        dispatchCarsByType("SUV");
        break;
      case 2:
        dispatchCarsByType("hatchback");
        break;
      default:
        dispatchCarsByType("sedan");
        break;
    }
  };

  return (
    <div className="main-div">
      {/* <div className="inside-div"></div> */}
      <Carousel activeIndex={index} onSelect={onSelectHandler} interval={8000}>
        <Carousel.Item className="content">
          <Image className="c-image" src={SEDAN} alt="First slide" />
          {/* <Carousel.Caption></Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <Image className="c-image" src={SUV} alt="Second slide" />

          {/* <Carousel.Caption>{searchBar}</Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <Image className="c-image" src={HATCHBACK} alt="Third slide" />

          {/* <Carousel.Caption>{searchBar}</Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BackgroundCarousal;
