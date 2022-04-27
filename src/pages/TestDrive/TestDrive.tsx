import { Button, Container, Form, Card, Modal } from "react-bootstrap";
import { useLocation, useParams, Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./TestDrive.scss";
import { contactpattern, emailpattern } from "../../constants";
function TestDrive() {
  let navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === true) {
      setValidated(true);
      handleShow()
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have successfully registered for test drive</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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
                  type="tel"
                  placeholder="Enter contact..."
                  required
                  pattern={contactpattern}
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
                  type="email"
                  placeholder="Enter email..."
                  required
                  pattern={emailpattern}
                  name="email"
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