import { useEffect } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import BMWImage from "../../assets/BMW.jpg";
import "./Careers.scss";
function Careers() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    document.title = "Xtreme Cars | Careers";
  }, []);
  return (
    <>
      <Container>
        <h3>Careers</h3>
        <Card>
          <Container>
            <Row>
              <Col>
                <Card.Body>
                  <Card.Text>
                    <h5>Job Openings for you.</h5>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card.Body>
                  <Card.Text>
                    {" "}
                    We are looking for a well candidate that suits our
                    requirements. If you are interested in any of the job
                    opportunities, kindly sent a mail to the given email id with
                    subject as the job requirement.
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card.Body>
                  <Card.Title>E-MAIL</Card.Title>
                  <Card.Text>
                    <a href="mailto:carrers@xtremecars.com" className="format-link">
                      carrers@extremecars.com
                    </a>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
            <Row>
              <Col>
                <Image src={BMWImage} fluid></Image>
              </Col>
            </Row>
          </Container>
        </Card>
      </Container>
    </>
  );
}
export default Careers;
