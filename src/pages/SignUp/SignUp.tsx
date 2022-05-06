import React, { useEffect, useState } from "react";
import { Button, Card, Container, Form, FormGroup } from "react-bootstrap";
import { useForm, useFormState } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  capitalLetterPattern,
  emailpattern,
  lowerLetterPattern,
  numbersPattern,
  specialCharacterPattern,
} from "../../constants";
import "./SignUp.scss";
function SignUp() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    criteriaMode: "all",
  });

  const { dirtyFields } = useFormState({
    control,
  });

  useEffect(() => {
    document.title = "Xtreme Cars | Sign Up";
  }, []);

  const onSubmit = (formData: any) => {
    toast.success("Profile Created Successfully");
    navigate("/home");
  };

  return (
    <>
      <Container>
        <h3>Sign Up</h3>
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
                <p className="text-danger" data-testid="name-error">
                  {errors.name.message}
                </p>
              )}
            </Form.Group>
            <Form.Group
              className="mb-3 form-group-container"
              controlId="formGroupContact"
            >
              <Form.Label>Mobile Number</Form.Label>
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
                <p className="text-danger" data-testid="contact-error">
                  {errors.contact.message}
                </p>
              )}
            </Form.Group>
            <Form.Group
              className="mb-3 form-group-container"
              controlId="formGroupAddress"
            >
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address..."
                {...register("address")}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 form-group-container"
              controlId="formGroupPincode"
            >
              <Form.Label>PinCode</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter pincode..."
                {...register("pincode", {
                  required: "Pincode is required",
                  minLength: {
                    value: 6,
                    message: "pin code cannot be less than 6 digits",
                  },
                  maxLength: {
                    value: 6,
                    message: "pin code cannot be more than 6 digits",
                  },
                })}
              />
              {errors.pincode && (
                <p className="text-danger" data-testid="address-error">
                  {errors.pincode.message}
                </p>
              )}
            </Form.Group>
            <Form.Group
              className="mb-3 form-group-container"
              controlId="formGroupEmail"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email..."
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: emailpattern,
                    message: "This is not a valid email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-danger" data-testid="email-error">
                  {errors.email.message}
                </p>
              )}
            </Form.Group>
            <Form.Group
              className="mb-3 form-group-container"
              controlId="formGroupPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password..."
                {...register("password", {
                  validate: {
                    lowercase: (value) =>
                      lowerLetterPattern.test(value) ||
                      "The password must contain one lower case letter",
                    uppercase: (value) =>
                      capitalLetterPattern.test(value) ||
                      "The password must contain one upper case letter",
                    minlength: (value) =>
                      value.length >= 8 ||
                      "The password length must be atleast 8",
                    specialCharacter: (value) =>
                      specialCharacterPattern.test(value) ||
                      `The password must contain a special character (! @ # $ % & ? / : ; . , " ')`,
                    numbers: (value) =>
                      numbersPattern.test(value) ||
                      "The password must contain a number",
                  },
                })}
              />
              {errors?.password?.types["lowercase"] && (
                <p className="text-danger" data-testid="address-error">
                  {errors?.password?.types["lowercase"]}
                </p>
              )}
              {errors?.password?.types["lowercase"] && (
                <p className="text-success" data-testid="address-error">
                  {errors?.password?.types["lowercase"]}
                </p>
              )}
              {errors?.password?.types["uppercase"] && (
                <p className="text-danger" data-testid="address-error">
                  {errors?.password?.types["uppercase"]}
                </p>
              )}
              {errors?.password?.types["minlength"] && (
                <p className="text-danger" data-testid="address-error">
                  {errors?.password?.types["minlength"]}
                </p>
              )}
              {errors?.password?.types["numbers"] && (
                <p className="text-danger" data-testid="address-error">
                  {errors?.password?.types["numbers"]}
                </p>
              )}
              {errors?.password?.types["specialCharacter"] && (
                <p className="text-danger" data-testid="address-error">
                  {errors?.password?.types["specialCharacter"]}
                </p>
              )}
            </Form.Group>
            <Form.Group
              className="mb-3 form-group-container"
              controlId="formGroupConfirmPassword"
            >
              <Form.Label>Re-enter Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Re-enter the password"
                {...register("confirmpassword", {
                  required: "Please re-enter the password",
                  validate: (value) =>
                    value === getValues("password") ||
                    "Password does not match",
                })}
              />
              {errors.confirmpassword && (
                <p className="text-danger" data-testid="address-error">
                  {errors.confirmpassword.message}
                </p>
              )}
              {!errors.confirmpassword &&
                dirtyFields["password"] &&
                dirtyFields["confirmpassword"] && (
                  <p className="text-success">Tick</p>
                )}
            </Form.Group>
            <FormGroup className="form-group-container">
              <Button variant="danger" type="submit">
                Submit
              </Button>
            </FormGroup>
          </Form>
        </Card>
      </Container>
    </>
  );
}
export default SignUp;
