import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CarFullDetails } from "../../Models/CarFullDetails";
import { RootState } from "../../Redux/configureStore";
import { getCarDetails } from "../../Redux/Store/CarDetails/actions";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./CarDetails.scss";
import { Color } from "react-bootstrap/esm/types";

function CarDetails() {
  let { id } = useParams();

  const car = useSelector<RootState>(
    (state) => JSON.parse(JSON.stringify(state.carDetails)).cardetails
  ) as CarFullDetails;

  const [carid] = useState(id!);
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
          <Col>
            <h6>Car Specifications</h6>
            <p>
              <text>Fuel type</text>
              <br />
              {car?.specifications.fuel_type}
            </p>
            <p>
              <text>Engine</text>
              <br />
              {car?.specifications.engine_cc}
            </p>
            <p>
              <text>Torque</text>
              <br />
              {car?.specifications.torque}
            </p>
            <p>
              <text>Acceleration</text>
              <br />
              {car?.specifications.acceleration}
            </p>
            <p>
              <text>Top Speed</text>
              <br />
              {car?.specifications.top_speed}
            </p>
            <p>
              <text>Variants</text>
              <br />
              {car?.specifications.variant.map((v) => (
                <span>{v}, </span>
              ))}
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Image src={car?.exterior.image} alt="No Image Available" />
          </Col>
          <Col>
            <h6>Exteriors</h6>
            <text>color</text>
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
              <text>Dimension</text>
              <br />
              This car measures {car?.exterior.length} <br />
              in length and has a {car?.exterior.width} wheelbase .
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Image src={car?.interior.image1} alt="No Image Available" />{" "}
            <Image src={car?.interior.image2} alt="No Image Available" />{" "}
          </Col>
          <Col>
            <h6>Interior finishes</h6>
            <text>color</text>
            <div
              style={{
                height: "3rem",
                width: "10rem",
                backgroundColor: car?.interior.color,
                margin: "0.5rem",
                border: "0.1rem solid black",
              }}
            />
            <p>
              <ul>
                {car?.interior.text.map((c) => (
                  <li>{c}</li>
                ))}
              </ul>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CarDetails;
