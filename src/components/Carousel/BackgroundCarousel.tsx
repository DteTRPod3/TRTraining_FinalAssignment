import React from "react";
import { Carousel, Image } from "react-bootstrap";
import HATCHBACK from "../../assets/HATCHBACK.jpg";
import CAROUSELLEFTICON from "../../assets/CarouselLeftIcon.svg";
import CAROUSELRIGHTICON from "../../assets/CarouselRightIcon.svg";
import SEDAN from "../../assets/SEDAN.jpg";
import SUV from "../../assets/SUV.jpg";
import "./BackgroundCarousel.scss";

function BackgroundCarousel({ carTypeIndex, dispatchCarsByType }: any) {

  let onSelectHandler = (selectedIndex: number) => {
    dispatchCarsByType(selectedIndex);
  };

  return (
    <div className="main-div">
      <Carousel
        activeIndex={carTypeIndex}
        onSelect={onSelectHandler}
        nextIcon={<img src={CAROUSELRIGHTICON} alt="nextButton" data-testid="next"/>}
        prevIcon={<img src={CAROUSELLEFTICON} alt="prevButton" data-testid="prev"/>}
        interval={null}
      >
        <Carousel.Item className="content">
          <Image className="c-image" src={SEDAN} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Image className="c-image" src={SUV} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Image className="c-image" src={HATCHBACK} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BackgroundCarousel;
