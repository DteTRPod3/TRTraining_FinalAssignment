import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CarFullDetails } from "../../models/CarFullDetails";
import { RootState } from "../../redux/configureStore";
import { getCarDetails } from "../../redux/store/carDetails/actions";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Bar1 from "../../assets/Bar1.svg";
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
                  <div className="mark01">
                    <span className="first-mark">01</span>
                  </div>
                </div>
                <div className="right-image-box">
                  <Image
                    fluid
                    className="front-image"
                    src={car?.specifications.image}
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
                  <Image fluid className="bar1" src={Bar1}></Image>
                  <div className="mark02">
                    <span className="first-mark">02</span>
                  </div>
                </div>
                <div className="right-image-box">
                  <Image
                    className="front-image"
                    fluid
                    src={car?.exterior.image}
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
                  <Image fluid className="bar1 bar3" src={Bar1}></Image>
                  <div className="mark03">
                    <span className="first-mark">03</span>
                  </div>
                </div>
                <div className="interior-flex">
                  <div className="right-image-box">
                    <Image
                      className="front-image"
                      fluid
                      src={car?.interior.image1}
                      alt="No Image Available"
                    />
                  </div>
                  <div className="right-image-box">
                    <Image
                      className="front-image"
                      fluid
                      src={car?.interior.image2}
                      alt="No Image Available"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="content">
                <h5 className="extra-bold">Interior finishes</h5>
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
                <Button id="btn-booknow">
                  <Link to={bookingLink} state={{ car: car }}>
                    Book Now
                  </Link>
                </Button>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="blackbox-right"></div>
      </Container>
    </>
  );
}

export default CarDetails;
