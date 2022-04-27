import React, { useCallback, useEffect, useState } from "react";
import "./FeaturedCars.scss";
import { CarDetails } from "../../models/CarDetails";
import CarCard from "../CarCard/CarCard";
import { Pagination } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../../redux/store/cars/actions";
import { carTypeList } from "../../models/CarType";

// interface IProps {
//   carTypeIndex: number;
// }

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

  // const [time, settime] = useState<number>(0);

  // const timer = () => {
  //   setTimeout(() => {
  //     if (time < cars.length) {
  //       settime(time + 1);
  //     } else {
  //       settime(0);
  //     }
  //   }, 1000);
  // };

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
    }, 3000);
    return () => {
      clearInterval(timeout);
    };
  }, [handlePageChange]);

  return (
    <div className="maindiv">
<<<<<<< HEAD
      <h6>Featured Cars</h6>
      {/* <ButtonGroup className="mb-2">
        <Button variant="dark">Popular</Button>
        <Button variant="dark" disabled>
          Just Launched
        </Button>
        <Button variant="dark" disabled>
          Upcoming
        </Button>
        <Link className="viewLink nav-link" to="/cars">
          View All
          <ArrowRight />
        </Link>
      </ButtonGroup> */}

      <div className="viewallbtn">
        <Link to="/cars">
          View All
          <ArrowRight />
        </Link>
      </div>

      <div className="cardslist">
        {featuredCars?.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
=======
      <h5>Featured Cars</h5>
      <div>
        <Link to="/cars" className="viewLink">
          View All{"  "}
          <ArrowRight />
        </Link>
>>>>>>> b9544c763a6fc41dee3aec786003f370153608f5
      </div>
      <div className="cardslist">
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
        <Pagination.Prev onClick={() => handlePageChange("Decrement")} />
        <Pagination.Next onClick={() => handlePageChange("Increment")} />
      </Pagination>
    </div>
  );
}
export default FeatureCars;
