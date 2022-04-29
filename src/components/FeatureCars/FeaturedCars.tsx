import React, { useCallback, useEffect, useState } from "react";
import "./FeaturedCars.scss";
import CarCard from "../CarCard/CarCard";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { carTypeList } from "../../models/CarType";
import { getCars } from "../../redux/store/cars/actions";
import "./FeaturedCars.scss";
import Arrow from "../../assets/Arrow Icon.svg";
import CrossArrow from "../../assets/Arrow.svg";

function FeatureCars(props: any) {
  const { carTypeIndex } = props;
  const dispatch = useDispatch();
  const [currentPage, setCurrrentPage] = useState<number>(0);

  const itemsPerPage = 3;
  const [totalPageCount, setTotalPageCount] = useState<number>(1);

  const featuredCars: any = useSelector((state: any) => state.cars.cars);

  const handlePageChange = useCallback(
    (opr: string) => {
      let page = 1;
      switch (opr) {
        case "Increment":
          page = currentPage + 1;
          break;
        case "Decrement":
          page = currentPage - 1;
          break;
        default:
          page = 1;
      }

      if (page >= totalPageCount) {
        page = 0;
      }
      if (page < 0) {
        page = totalPageCount - 1;
      }
      setCurrrentPage(Math.floor(page));
    },
    [currentPage, totalPageCount]
  );

  useEffect(() => {
    dispatch(getCars(carTypeList[carTypeIndex]));
  }, [carTypeIndex, dispatch]);

  useEffect(() => {
    featuredCars &&
      setTotalPageCount(
        Math.floor(
          featuredCars?.length % itemsPerPage === 0
            ? featuredCars?.length / itemsPerPage
            : featuredCars?.length / itemsPerPage + 1
        )
      );
  }, [featuredCars]);

  useEffect(() => {
    const timeout = setInterval(() => {
      handlePageChange("Increment");
    }, 5000);
    return () => {
      clearInterval(timeout);
    };
  }, [handlePageChange]);

  return (
    <div className="maindiv">
      <h5>Featured Cars</h5>
      <div>
        <Link to="/cars" className="viewLink">
          View All{"  "}
          <img src={CrossArrow} alt="cross arrow" />
        </Link>
      </div>
      <div className="cardslist" data-testid="carlist">
        {featuredCars
          ?.slice(
            itemsPerPage * currentPage,
            itemsPerPage * currentPage + itemsPerPage
          )
          ?.map((car: any) => (
            <CarCard key={car.id} car={car} />
          ))}
      </div>
      <Pagination className="pagination_div">
        <button
          className="arrow-btn"
          data-testid="prev"
          onClick={() => handlePageChange("Decrement")}
        >
          <img src={Arrow} className="prev-arrow" alt="Arrow icon" />
        </button>
        <button
          className="arrow-btn"
          data-testid="next"
          onClick={() => handlePageChange("Increment")}
        >
          <img src={Arrow} className="next-arrow" alt="Arrow icon" />
        </button>
      </Pagination>
    </div>
  );
}
export default FeatureCars;
