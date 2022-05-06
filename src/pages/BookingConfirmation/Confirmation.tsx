import React, { useEffect } from "react";
import { Container, Image, Form } from "react-bootstrap";
import bmw1 from "../../assets/bmwontop.jpg";
import bmw2 from "../../assets/BMW.jpg";
import "./Confirmation.scss";
import { Link, useLocation } from "react-router-dom";

function Confirmation() {
  const { car } = useLocation().state as any;
  const { formData } = useLocation().state as any;

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(-1, -1);
    }, 100);
  });
  return (
    <Container>
      <div className="top-div">
        <Image src={bmw1} />
        <h3>Booking Successful</h3>
        <p>
          {" "}
          The booking is confirmed. Our customer executive will be in touch with
          you shortly. In case of any queries please reach out to{" "}
          <b>18002003000</b>
        </p>
        <div className="confirmation-details-container">
          <div className="left-box">
            <h5>Booking Details</h5>
            <ul>
              <li>
                <span className="text-booking-heading">Booking id:</span>{" "}
                {"XC" + new Date().getTime()}
              </li>
              <li>
                <span className="text-booking-heading">Car:</span>{" "}
                <span className="name">{car.specifications.name}</span>
              </li>

              <li>
                <span className="text-booking-heading">Variants:</span>{" "}
                <span className="name">{car.specifications?.variant[0]}</span>
              </li>
              <li className="color-box">
                <span className="text-booking-heading">Color:</span>{" "}
                <div
                  className="color-code"
                  style={{ backgroundColor: car.exterior.color }}
                ></div>
              </li>
            </ul>

            <br />
          </div>
          <div className="right-box">
            <h5>User Details</h5>
            <ul>
              <li>
                <span className="text-booking-heading">Name :</span>{" "}
                <span className="name"> {formData.name}</span>
              </li>
              <li>
                <span className="text-booking-heading">Contact :</span>{" "}
                {formData.contact}{" "}
              </li>
              <li>
                <span className="text-booking-heading">City :</span>{" "}
                {formData.City}{" "}
              </li>
            </ul>
          </div>
        </div>
        <Link to="/" className="download-summary">
          <span className="download-link">download</span> the booking summary
        </Link>
      </div>
      <div className="bottom-div">
        <Image fluid src={bmw2} />
      </div>
    </Container>
  );
}

export default Confirmation;
