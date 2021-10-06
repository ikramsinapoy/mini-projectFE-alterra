import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Container style={{ color: "white", padding: "40px" }}>
        <Row>
          <Col>
            <Row>
              <Link to="/" style={{ color: "#fff" }}>
                <h4 style={{ fontWeight: "bold" }}>FoodCal</h4>
              </Link>
            </Row>
            <Row>instagram</Row>
            <Row>facebook</Row>
            <Row>twitter</Row>
          </Col>
          <Col>
            <Row style={{ fontWeight: "bold" }}>Contact us</Row>
            <Row>623 Harrison St., 2nd Floor, San Francisco, CA 94107</Row>
            <Row>415-201-6370</Row>
            <Row>foodcal@food.com</Row>
          </Col>
          <Col>
            <Row style={{ fontWeight: "bold" }}>Company</Row>
            <Row>
              <Link to="/" style={{ color: "#fff" }}>
                Home
              </Link>
            </Row>
            <Row>
              <Link to="/menu" style={{ color: "#fff" }}>
                Menu
              </Link>
            </Row>
            <Row>About us</Row>
          </Col>
          <Col>
            <Row style={{ fontWeight: "bold" }}>Resources</Row>
            <Row>Help center</Row>
            <Row>Privacy & terms</Row>
            <Row>Cooking partners</Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
