import React from "react";
import { Carousel, Image } from "react-bootstrap";
import SEDAN from "../../Assets/SEDAN.jpg";
import SUV from "../../Assets/SUV.jpg";
import HATCHBACK from "../../Assets/HATCHBACK.jpg";
import COUPE from "../../Assets/COUPE.jpg";
import "./BackgroundCarousal.scss";

function BackgroundCarousal() {
  return (
    <div className="main-div">
      {/* <div className="inside-div"></div> */}
      <Carousel>
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
        <Carousel.Item>
          <Image className="c-image" src={COUPE} alt="Third slide" />

          {/* <Carousel.Caption>{searchBar}</Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BackgroundCarousal;
