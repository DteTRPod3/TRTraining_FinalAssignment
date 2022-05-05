import React, { useCallback, useEffect, useState } from "react";
import "./Login.scss";
import { Button, Form, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { contactpattern, emailpattern } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/store/Authentication/actions";
import { LoginStatus } from "../../models/LoginStatus";

function Login() {
  const [tabState, SetTabState] = useState("with-email");
  const [userMainField, setuserMainField] = useState("Email address");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: any) => state.authentiaction.authenticated
  );
  const [displayMsg, setDisplayMsg] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  useEffect(() => {
    document.title = "Xtreme Cars | Login Page";
  }, []);

  const handleTabSwitch = (selectedKey: any) => {
    SetTabState(`${selectedKey}`);
    setDisplayMsg(false);
  };

  useEffect(() => {
    if (tabState === "with-email") {
      setuserMainField("Email address");
    } else {
      setuserMainField("Mobile Number");
    }
  }, [tabState]);

  const onFormSubmit = (data: any, e: any) => {
    const loginCredentials = {
      userid: tabState === "with-email" ? data.email : data.mobile,
      password: data.password,
    };
    dispatch(login(loginCredentials));
    ShowHideMessage();
  };

  const ShowHideMessage = useCallback(() => {
    if (isAuthenticated === LoginStatus.LoginFailed) {
      setDisplayMsg(true);
    } else {
      setDisplayMsg(false);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated === LoginStatus.LoginSuccess) {
      navigate("/home");
    } else if (isAuthenticated === LoginStatus.LoginFailed) {
      setDisplayMsg(true);
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="login-div">
      <h5 className="login-heading">Login to Xtreme Cars</h5>
      <br />
      <Form className="login-form" onSubmit={handleSubmit(onFormSubmit)}>
        <p>Login with </p>
        <Nav
          variant="tabs"
          defaultActiveKey="with-email"
          activeKey={tabState}
          onSelect={handleTabSwitch}
        >
          <Nav.Item>
            <Nav.Link eventKey="with-email">Email</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link data-testid="with-mobile" eventKey="with-mobile">
              Mobile Number
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <br />
        <Form.Group>
          {tabState === "with-email" && (
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>{userMainField}</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: emailpattern,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-danger" data-testid="email-error">
                  {errors.email.message}
                </p>
              )}
            </Form.Group>
          )}
          {tabState === "with-mobile" && (
            <Form.Group className="mb-3" controlId="formBasicMobile">
              <Form.Label>Mobile Numbar</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter mobile number"
                pattern={contactpattern}
                {...register("mobile", {
                  required: "Mobile number is required",
                  minLength: {
                    value: 10,
                    message: "Mobile number cannot be less than 10 digits",
                  },
                  maxLength: {
                    value: 10,
                    message: "Mobile number cannot be more than 10 digits",
                  },
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Invalid Mobile number",
                  },
                })}
              />
              {errors.mobile && (
                <p className="text-danger" data-testid="mobile-error">
                  {errors.mobile.message}
                </p>
              )}
            </Form.Group>
          )}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              data-testid="password"
              type="password"
              placeholder="Enter password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-danger" data-testid="password-error">
                {errors.password.message}
              </p>
            )}
          </Form.Group>
        </Form.Group>
        <Form.Group className="mb-3" controlId="linkToSignup">
          <Link to="/signup" className="register-link">
            New User? Register now
          </Link>
        </Form.Group>
        <br />
        <Form.Group>
          {displayMsg && (
            <p className="text-danger">
              Login failed due to incorrect credetials
            </p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="buttonGrp">
          <Button variant="info" type="submit" data-testid="submit-button">
            Login
          </Button>
          <Button
            data-testid="reset-button"
            variant="light"
            type="button"
            onClick={() => {
              reset({
                email: "",
                password: "",
                mobile: "",
              });
              setDisplayMsg(false);
            }}
          >
            Reset
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Login;
