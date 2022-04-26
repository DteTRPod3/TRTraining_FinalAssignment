import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CarFullDetails } from "../../models/CarFullDetails";
import { RootState } from "../../redux/configureStore";
import { getCarDetails } from "../../redux/store/carDetails/actions";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CarDetails.scss";

function CarDetails() {
  let { id } = useParams();
  let key = 0;

  const car = useSelector<RootState>(
    (state) => JSON.parse(JSON.stringify(state.carDetails)).cardetails
  ) as CarFullDetails;

  const [carid] = useState(id!);
  const bookingLink = "/booking/" + carid;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCarDetails(carid));
  }, [dispatch, carid]);

  return (
    <div className="totaldiv">
      <h5>{car?.specifications.name}</h5>
      <Container className="detailsContainer">
        <Row>
          <Col>
            <Image src={car?.specifications.image} alt="No Image Available" />
          </Col>
          <Col className="col2">
            <h6>Car Specifications</h6>
            <p>
              <span>Fuel type</span>
              <br />
              {car?.specifications.fuel_type}
            </p>
            <p>
              <span>Engine</span>
              <br />
              {car?.specifications.engine_cc}
            </p>
            <p>
              <span>Torque</span>
              <br />
              {car?.specifications.torque}
            </p>
            <p>
              <span>Acceleration</span>
              <br />
              {car?.specifications.acceleration}
            </p>
            <p>
              <span>Top Speed</span>
              <br />
              {car?.specifications.top_speed}
            </p>
            <p>
              <span>Variants</span>
              <br />
              {car?.specifications.variant.map((v) => (
                <li key={++key}>{v}, </li>
              ))}
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Image src={car?.exterior.image} alt="No Image Available" />
          </Col>
          <Col className="col2">
            <h6>Exteriors</h6>
            <span>color</span>
            <div
              style={{
                height: "3rem",
                width: "10rem",
                backgroundColor: car?.exterior.color,
                margin: "0.5rem",
                border: "0.1rem solid black",
              }}
            />
            <p>
              <span>Dimension</span>
              <br />
              This car measures {car?.exterior.length} <br />
              in length and has a {car?.exterior.width} wheelbase .
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Image src={car?.interior.image1} alt="No Image Available" />
            <br />
            <Image src={car?.interior.image2} alt="No Image Available" />{" "}
          </Col>
          <Col className="col2">
            <h6>Interior finishes</h6>
            <span>color</span>
            <div
              style={{
                height: "3rem",
                width: "10rem",
                backgroundColor: car?.interior.color,
                margin: "0.5rem",
                border: "0.1rem solid black",
              }}
            />

            <ul>
              {car?.interior.text.map((c) => (
                <li key={++key}>{<p>{c} </p>}</li>
              ))}
            </ul>

            <h6>Cost {car?.cost}</h6>
          </Col>
        </Row>
        <Row className="justify-content-end">
          <Button id="btn_booknow" variant="info">
            <Link to={bookingLink} state={{ car: car }}>
              Book Now
            </Link>
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default CarDetails;
