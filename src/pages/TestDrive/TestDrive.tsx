import { Button, Container, Form, Card, Modal, FormGroup } from "react-bootstrap";
import React, { useEffect } from "react";
import "./TestDrive.scss";
import { contactpattern, emailpattern } from "../../constants";
import { useForm } from "react-hook-form";
import { useState } from "react";
function TestDrive() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });
  useEffect(() => {
    document.title = "Xtreme Cars | Test Drive";
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const onSubmit = (formData: any) => {
    handleShow()
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for sharing your details, we will get in touch with you within 24 hours of your request</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Container>
        <h3>Test Drive Form</h3>
        <Card className="form-content">
            <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <Form.Group className="mb-3 form-group-container" controlId="formGroupName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name..."
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="text-danger" data-testid="name-error">{errors.name.message}</p>}
              </Form.Group>
              <Form.Group className="mb-3 form-group-container" controlId="formGroupContact">
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
                {errors.contact && <p className="text-danger" data-testid="contact-error">{errors.contact.message}</p>}
              </Form.Group>
              <Form.Group className="mb-3 form-group-container" controlId="formGroupAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter address..."
                  {...register("address", { required: "Address is required" })}
                />
                {errors.address && <p className="text-danger" data-testid="address-error">{errors.address.message}</p>}
              </Form.Group>
              <Form.Group className="mb-3 form-group-container" controlId="formGroupEmail">
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
                {errors.email && <p className="text-danger" data-testid="email-error">{errors.email.message}</p>}
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
export default TestDrive;
