import {
  Button,
  Container,
  Form,
  Card,
  Modal,
  FormGroup,
} from "react-bootstrap";
import React, { useEffect } from "react";
import "./SignUp.scss";
import {
  capitalLetterPattern,
  contactpattern,
  emailpattern,
  lowerLetterPattern,
  numbersPattern,
  specialCharacterPattern,
} from "../../constants";
import { useForm, useFormState } from "react-hook-form";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getValue } from "@testing-library/user-event/dist/utils";
import toast, { Toaster } from "react-hot-toast";
function SignUp() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    criteriaMode: "all",
  });

  const { dirtyFields } = useFormState({
    control,
  });
  const watchPassword = watch("password")

  useEffect(() => {
    document.title = "Xtreme Cars | Sign Up";
  }, []);
  const onSubmit = (formData: any) => {
    toast((t) => (
      <div
        className="toast-signup"
      >
        <span>Profile Created Successfully</span>
        <div className="close-icon" onClick={() => toast.dismiss(t.id)}>
          x
        </div>
      </div>
    ));

    setTimeout(() => {
      navigate("/home");
    }, 3000);
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
                <p className="text-danger" data-testid="pincode-error">
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
                <p className="text-danger" data-testid="lowercase-error">
                  {errors?.password?.types["lowercase"]}
                </p>
              )}
              {!errors?.password?.types["lowercase"] && dirtyFields["password"] && (
                <p className="text-success" data-testid="password-success">
                  The password must contain one lower case letter
                </p>
              )}
              {errors?.password?.types["uppercase"] && (
                <p className="text-danger" data-testid="uppercase-error">
                  {errors?.password?.types["uppercase"]}
                </p>
              )}
              {!errors?.password?.types["uppercase"] && dirtyFields["password"] && (
                <p className="text-success" data-testid="password-success">
                  The password must contain one upper case letter
                </p>
              )}
              {errors?.password?.types["minlength"] && (
                <p className="text-danger" data-testid="address-error">
                  {errors?.password?.types["minlength"]}
                </p>
              )}
              {!errors?.password?.types["minlength"] && dirtyFields["password"] && (
                <p className="text-success" data-testid="password-success">
                  The password length must be atleast 8
                </p>
              )}
              {errors?.password?.types["numbers"] && (
                <p className="text-danger" data-testid="address-error">
                  {errors?.password?.types["numbers"]}
                </p>
              )}
              {!errors?.password?.types["numbers"] && dirtyFields["password"] && (
                <p className="text-success" data-testid="password-success">
                  The password must contain a number
                </p>
              )}
              {errors?.password?.types["specialCharacter"] && (
                <p className="text-danger" data-testid="address-error">
                  {errors?.password?.types["specialCharacter"]}
                </p>
              )}
              {!errors?.password?.types["specialCharacter"] && dirtyFields["password"] && (
                <p className="text-success" data-testid="password-success">
                  The password must contain a special character (! @ # $ % & ? / : ; . , " ')
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
                    value === watchPassword ||
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
                  <p className="text-success">Password match</p>
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
      <Toaster
        toastOptions={{
          duration: 2000,
          position: "top-right",
          className: "toast-main",
        }}
      />
    </>
  );
}
export default SignUp;
