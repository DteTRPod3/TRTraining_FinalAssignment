import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CarFullDetails } from "../../models/CarFullDetails";
import { RootState } from "../../redux/configureStore";
import { getCarDetails } from "../../redux/store/carDetails/actions";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Bar1 from "../../assets/01bar.svg";
import Bar2 from "../../assets/02Bar.svg";
import Bar3 from "../../assets/03Bar.svg";
import BMW1 from "../../assets/BMW1.svg";
import BMW2 from "../../assets/BMW2.svg";
import interior1 from "../../assets/Interior1.svg";
import interior2 from "../../assets/Interior2.svg";

import "./CarDetails.scss";

function CarDetails() {
  let { id } = useParams();
  let key = 0;

  const car = useSelector<RootState>(
    (state) => JSON.parse(JSON.stringify(state.carDetails)).cardetails
  ) as CarFullDetails;

  const carimage1: string =
    car?.specifications.image === ""
      ? BMW1
      : car?.specifications.image.toString();

  const exteriorimage: string =
    car?.exterior.image === "" ? BMW2 : car?.exterior.image;

  const interiorimage1: string =
    car?.interior.image1 === "" ? interior1 : car?.interior.image1;

  const interiorimage2: string =
    car?.interior.image2 === "" ? interior2 : car?.interior.image2;

  console.warn(car);

  const [carid] = useState(id!);
  const bookingLink = "/booking/" + carid;
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Xtreme Cars | Car Details";
    dispatch(getCarDetails(carid));
  }, [dispatch, carid]);

  return (
    <>
      <Container fluid className="total-div">
        <div className="black-box-left"></div>
        <Container className="details-container">
          <Row>
            <Col md lg xl xxl={8}>
              <h5 className="condensed-semibold" data-testid="CarName">
                {car?.specifications.name}
              </h5>
              <div className="image-box">
                <div className="left-image-box">
                  <Image fluid className="bar1" src={Bar1}></Image>
                </div>
                <div className="right-image-box">
                  <Image
                    fluid
                    className="front-image"
                    src={carimage1}
                    alt="No Image Available"
                  />
                </div>
              </div>
            </Col>
            <Col>
              <div className="content">
                <span className="mixed-font"> Car</span>
                <h5 className="extra-bold">Specifications</h5>

                <div className="specification-details">
                  <p>
                    <span>Fuel type</span>
                    <br />
                    <p>{car?.specifications.fuel_type}</p>
                  </p>
                  <p>
                    <span>Engine</span>
                    <br />
                    <p>{car?.specifications.engine_cc}</p>
                  </p>
                  <p>
                    <span>Torque</span>
                    <br />
                    <p>{car?.specifications.torque}</p>
                  </p>
                  <p>
                    <span>Acceleration</span>
                    <br />
                    <p> {car?.specifications.acceleration}</p>
                  </p>
                  <p>
                    <span>Top Speed</span>
                    <br />
                    <p> {car?.specifications.top_speed}</p>
                  </p>
                  <p>
                    <span>Variants</span>
                    <br />
                    {car?.specifications.variant.map((v) => (
                      <li key={++key}>{v}, </li>
                    ))}
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <br />
          <br />
          <Row>
            <Col md lg xl xxl={8}>
              <div className="image-box">
                <div className="left-image-box">
                  <Image fluid className="bar1" src={Bar2}></Image>
                </div>
                <div className="right-image-box">
                  <Image
                    className="front-image"
                    fluid
                    src={exteriorimage}
                    alt="No Image Available"
                  />
                </div>
              </div>
            </Col>
            <Col>
              <div className="content">
                <h5 className="extra-bold">Exteriors</h5>
                <div
                  className="exterior-color-box"
                  style={{
                    backgroundColor: car?.exterior.color,
                  }}
                />
                <div className="specification-details">
                  <br />
                  <p>
                    This car measures {car?.exterior.length} <br />
                    in length and has a {car?.exterior.width} wheelbase .
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md lg xl xxl={8}>
              <div className="image-box">
                <div className="left-image-box">
                  <Image fluid className="bar1 bar3" src={Bar3}></Image>
                </div>
                <div className="interior-flex">
                  <div className="right-image-box">
                    <Image
                      className="front-image"
                      fluid
                      src={interiorimage1}
                      alt="No Image Available"
                    />
                  </div>
                  <div className="right-image-box">
                    <Image
                      className="front-image"
                      fluid
                      src={interiorimage2}
                      alt="No Image Available"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="content">
                <h5 className="extra-bold" id="interiors">
                  Interior finishes
                </h5>
                <div
                  className="interior-color-box"
                  style={{
                    backgroundColor: car?.interior.color,
                  }}
                />
                <div className="specification-details">
                  <div className="interior-content">
                    <ul>
                      {car?.interior.text.map((interior) => (
                        <li key={++key}>{<p>{interior} </p>}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Row>
                  <Col md="3" className="cost">
                    Cost
                  </Col>
                  <Col md="4" className="cost">
                    {car?.cost}
                  </Col>
                </Row>
              </div>

              <Row className="justify-content-md-center">
                <Link to={bookingLink} state={{ car: car }}>
                  <Button id="btn-booknow">Book Now</Button>
                </Link>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default CarDetails;
