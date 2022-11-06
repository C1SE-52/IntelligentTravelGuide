import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
//
import cusTomIcon1 from "../../../../assets/h1-custom-icon-img-1.png";
import cusTomIcon2 from "../../../../assets/h1-custom-icon-img-2.png";
import cusTomIcon3 from "../../../../assets/h1-custom-icon-img-3.png";
import cusTomIcon4 from "../../../../assets/h1-custom-icon-img-4.png";
import "./Advertise.scss";

const Advertise = () => {
  return (
    <div className="advertise">
      <Container>
        <Row>
          <Col sm={6} md={4} lg={3} className="mb-3">
            <div className="advertise__container">
              <img src={cusTomIcon1} alt="Icon" className="advertise__img" />
              <div className="advertise__content">
                <h3>Restaurants</h3>
                <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} lg={3} className="mb-3">
            <div className="advertise__container">
              <img src={cusTomIcon2} alt="Icon" className="advertise__img" />
              <div className="advertise__content">
                <h3>Sightseeing</h3>
                <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} lg={3} className="mb-3">
            <div className="advertise__container">
              <img src={cusTomIcon3} alt="Icon" className="advertise__img" />
              <div className="advertise__content">
                <h3>Shops & Boutiques</h3>
                <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} lg={3} className="mb-3">
            <div className="advertise__container">
              <img src={cusTomIcon4} alt="Icon" className="advertise__img" />
              <div className="advertise__content">
                <h3>Where to Stay</h3>
                <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Advertise;
