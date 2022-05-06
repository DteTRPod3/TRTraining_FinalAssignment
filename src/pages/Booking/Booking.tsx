import React, { useEffect, useState } from "react";
import { useLocation, useParams, Link, useNavigate } from "react-router-dom";
import { CarFullDetails } from "../../models/CarFullDetails";
import Arrow from "../../assets/Arrow.svg";
import "./Booking.scss";
import { cities } from "../../constants";
import BMW1 from "../../assets/BMW1.svg";

import {
  Button,
  Container,
  Form,
  Card,
  FormGroup,
  Image,
} from "react-bootstrap";
import { useForm } from "react-hook-form";

function Booking() {
  const options = cities.map((item, i) => {
    return (
      <option key={i} value={item}>
        {item}
      </option>
    );
  });
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });
  useEffect(() => {
    document.title = "Xtreme Cars | Booking";
  }, []);
  const onSubmit = (formData: any) => {
    console.warn("printing formdata from booking page", formData);
    navigate("/booking_confirmation", { state: { car, formData } });
  };

  const { car } = useLocation().state as any;
  const [cardetails] = useState<CarFullDetails>(car);

  const defaultImage =
    cardetails?.specifications.image === ""
      ? BMW1
      : cardetails?.specifications.image;
  const { id } = useParams();
  const detailsLink = "/car_details/" + id;
  let navigate = useNavigate();

  return (
    <Container fluid className="booking-Container">
      <div>
        <span className="mixed-font">Car</span>
        <h5 className="extra-bold">Details</h5>
        <br />
        <Image
          fluid
          className="car-img"
          src={defaultImage}
          alt="No Image Available"
        />
        <br /> <br />
        <h5 className="extra-bold">{cardetails?.specifications.name}</h5>
        <br />
        <text>Fuel Type</text>
        <p>{cardetails.specifications.fuel_type}</p>
        <text>Engine</text>
        <p>{cardetails.specifications.engine_cc}</p>
        <br />
        <Link to={detailsLink} state={{ car: car }}>
          View Details{" "}
          <img className="arrow-image" src={Arrow} alt="arrow icon"></img>
        </Link>
      </div>
      <div className="formDiv">
        <span className="mixed-font"> Booking</span>
        <h5 className="extra-bold">Details</h5>

        <Container>
          <Card className="form-content">
            <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <Form.Group
                className="mb-3 form-group-container"
                controlId="formGroupName"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name..."
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <h6 className="text-danger" data-testid="name-error">
                    {errors.name.message}
                  </h6>
                )}
              </Form.Group>
              <Form.Group
                className="mb-3 form-group-container"
                controlId="formGroupContact"
              >
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter contact..."
                  {...register("contact", {
                    required: "Mobile Number is required",
                    minLength: {
                      value: 10,
                      message: "Mobile number cannot be less than 10 digits",
                    },
                    maxLength: {
                      value: 10,
                      message: "Mobile number cannot be more than 10 digits",
                    },
                  })}
                />
                {errors.contact && (
                  <h6 className="text-danger" data-testid="contact-error">
                    {errors.contact.message}
                  </h6>
                )}
              </Form.Group>
              <Form.Group
                className="mb-3 form-group-container"
                controlId="formGroupAddress"
              >
                <Form.Label>City</Form.Label>

                <Form.Select
                  aria-label="Default select example"
                  {...register("City", { required: "City is required" })}
                >
                  <option value="" disabled selected>
                    {" "}
                    Select city
                  </option>
                  {options}
                </Form.Select>
                {errors.City && (
                  <h6 className="text-danger" data-testid="City-error">
                    {errors.City.message}
                  </h6>
                )}
              </Form.Group>
              <Form.Group
                className="mb-3 form-group-container"
                controlId="formGroupEmail"
              >
                <Form.Check
                  type="checkbox"
                  label="I agree to terms and condition"
                  {...register("terms", {
                    required: "You must agree to terms and condition",
                  })}
                />
                {errors.terms && (
                  <h6 className="text-danger" data-testid="terms-error">
                    {errors.terms.message}
                  </h6>
                )}
              </Form.Group>
              <FormGroup className="form-group-container">
                <Button type="submit">Submit</Button>
              </FormGroup>
            </Form>
          </Card>
        </Container>
      </div>
    </Container>
  );
}

export default Booking;
