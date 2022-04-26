import { Button, Container, Form, Card } from "react-bootstrap";
import { useLocation, useParams, Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./TestDrive.scss";
function TestDrive() {
  let navigate = useNavigate();
  const [mobileValid, setMobileValid] = useState(false);
  const [emailValid,setEmailValid] = useState(false);
  var pattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      console.log("True")
    }
    setValidated(true);
  };

  const handleChange = (event: any) => {
    const {name,value} = event.target
    if(name==="contact"){
        if (!(!value || pattern.test(value) === false)) {
            setMobileValid(value);
          }
    }
    else if(name==="email"){
        if (!(!value || emailPattern.test(value) === false)) {
            setEmailValid(true);
          }
    }
  };

  return (
    <>
      <Container className="testDrive--main--container">
        <h5>Test Drive Form</h5>
        <Card>
          <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name..."
                  required
                  name="name"
                />
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
                  placeholder="Enter contact..."
                  required
                  pattern="[6-9]{1}[0-9]{9}"
                  onChange={handleChange}
                  name="contact"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Invalid phone number
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter address..."
                  required
                  name="address"
                />
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Address Required
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email..."
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  name="email"
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Email Required
                </Form.Control.Feedback>
              </Form.Group>
              <br></br>
              <Button variant="danger" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Card>
      </Container>
    </>
  );
}
export default TestDrive;
