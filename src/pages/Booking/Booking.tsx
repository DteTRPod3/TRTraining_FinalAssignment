import React, { useState } from "react";
import { Container, Form, Image, Button } from "react-bootstrap";
import { useLocation, useParams, Link, useNavigate } from "react-router-dom";
import { CarDetails } from "../../models/CarDetails";
import { CarFullDetails } from "../../models/CarFullDetails";
import "./Booking.scss";

function Booking() {
  const { car } = useLocation().state as any;
  const [cardetails] = useState<CarFullDetails>(car);
  const { id } = useParams();
  const detailsLink = "/cardetails/" + id;
  let navigate = useNavigate();
  const [mobileValid, setMobileValid] = useState(false);
  // var pattern = new RegExp(/^[0-9\b]+$/);
  var pattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      navigate("/booking_confirmation");
    }
    setValidated(true);
  };

  const handleChange = (event: any) => {
    const phone = event.target.value;

    if (!(!phone || pattern.test(phone) === false)) {
      setMobileValid(true);
    }
  };

  return (
    <Container className="bookingContainer">
      <div>
        <h6>Car Details</h6>
        <Image
          src={cardetails?.specifications.image}
          alt="No Image Available"
        />
        <br /> <br />
        <h4>{cardetails?.specifications.name}</h4>
        <br />
        <text>Fuel Type</text>
        <p>{cardetails.specifications.fuel_type}</p>
        <text>Engine</text>
        <p>{cardetails.specifications.engine_cc}</p>
        <br />
        <Link to={detailsLink}>View Details</Link>
      </div>
      <div className="formDiv">
        <h5>Booking Details</h5>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" required />
            <Form.Control.Feedback type="valid">
              Looks good!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Name Required
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="contact number should be 10 digit only"
              required
              pattern="[6-9]{1}[0-9]{9}"
              onChange={handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Invalid phone number
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>City</Form.Label>
            <Form.Select required>
              <option value="1">Bangalore</option>
              <option value="2">Mysore</option>
              <option value="3">New Dehli</option>
              <option value="4">Hydrabad</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="formGroupName" />
            <Form.Check
              required
              type="checkbox"
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
            <h6>Terms and conditions:</h6>
            <text>
              *Terms and conditions apply. All offers are from dealers. Please
              get in touch with your nearest dealer for detailed terms and
              conditions. All taxes are additional. Offer valid till February
              15, 2022 and is subject to change without prior notice.
              Calculations for the following are for a specific tenure mileage
              and finance amount.
            </text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Booking;
