import React, { useEffect } from "react";
import { Button, Card, Container, Form, FormGroup } from "react-bootstrap";
import { useForm, useFormState } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  capitalLetterPattern,
  emailpattern,
  lowerLetterPattern,
  numbersPattern,
  pincodePattern,
  specialCharacterPattern,
} from "../../constants";
import { LoginStatus } from "../../models/LoginStatus";
import { login } from "../../redux/store/Authentication/actions";
import { postSignUpDetails } from "../../redux/store/UserSignUp/action";
import "./SignUp.scss";

function SignUp() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: any) => state.authentiaction.authenticated
  );
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
  const watchPassword = watch("password");

  useEffect(() => {
    document.title = "Xtreme Cars | Sign Up";
  }, []);

  useEffect(() => {
    if (isAuthenticated === LoginStatus.LoginSuccess) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);
  const onSubmit = async (formData: any) => {
    const loginCredentials = {
      userid: formData?.email,
      password: "L#(qc{f}TaJu4%4k",
    };
    await dispatch(postSignUpDetails(formData));

    await dispatch(login(loginCredentials));
    toast.success("Profile Created Successfully");
  };
  console.log(errors)

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
                type="text"
                placeholder="Enter pincode..."
                {...register("pincode", {
                  required: "Pincode is required",
                  pattern:{
                    value:pincodePattern,
                    message:"Pin code is invalid"
                  }
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
                  required:"Password is required",
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
              {errors?.password?.types["required"] && (
                <p className="text-danger" data-testid="required-error">
                  {errors?.password?.types["required"]}
                </p>
              )}
              {errors?.password?.types["lowercase"] &&
                dirtyFields["password"] && (
                <p className="text-danger" data-testid="lowercase-error">
                  {errors?.password?.types["lowercase"]}
                </p>
              )}
              {!errors?.password?.types["lowercase"] &&
                dirtyFields["password"] && (
                  <p className="text-success" data-testid="password-success">
                    The password must contain one lower case letter
                  </p>
                )}
              {errors?.password?.types["uppercase"]  &&
                dirtyFields["password"] && (
                <p className="text-danger" data-testid="uppercase-error">
                  {errors?.password?.types["uppercase"]}
                </p>
              )}
              {!errors?.password?.types["uppercase"] &&
                dirtyFields["password"] && (
                  <p className="text-success" data-testid="password-success">
                    The password must contain one upper case letter
                  </p>
                )}
              {errors?.password?.types["minlength"]  &&
                dirtyFields["password"] && (
                <p className="text-danger" data-testid="address-error">
                  {errors?.password?.types["minlength"]}
                </p>
              )}
              {!errors?.password?.types["minlength"] &&
                dirtyFields["password"] && (
                  <p className="text-success" data-testid="password-success">
                    The password length must be atleast 8
                  </p>
                )}
              {errors?.password?.types["numbers"]  &&
                dirtyFields["password"] && (
                <p className="text-danger" data-testid="number-error">
                  {errors?.password?.types["numbers"]}
                </p>
              )}
              {!errors?.password?.types["numbers"] && dirtyFields["password"] && (
                <p className="text-success" data-testid="password-success">
                  The password must contain a number
                </p>
              )}
              {errors?.password?.types["specialCharacter"]  &&
                dirtyFields["password"] && (
                <p className="text-danger" data-testid="character-error">
                  {errors?.password?.types["specialCharacter"]}
                </p>
              )}
              {!errors?.password?.types["specialCharacter"] &&
                dirtyFields["password"] && (
                  <p className="text-success" data-testid="password-success">
                    The password must contain a special character (! @ # $ % & ?
                    / : ; . , " ')
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
                    value === watchPassword || "Password does not match",
                })}
              />
              {errors.confirmpassword && (
                <p className="text-danger" data-testid="confirm-error">
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
          <br></br>
          <Link to="/login">Already a user? Click here to login</Link>
        </Card>
      </Container>
    </>
  );
}
export default SignUp;
