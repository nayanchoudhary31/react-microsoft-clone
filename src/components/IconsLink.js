import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import windowblack from "../assets/window-black.png";
import surface from "../assets/surface.png";
import xbox from "../assets/xbox.png";
function IconsLink() {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col>
          <img src={windowblack} alt="window-logo" />
          <h5>Choose your Microsoft 365.</h5>
          </Col>
          <Col>
          <img src={surface} alt="surface" />
          <h5>Explore Surface Devices.</h5>
          </Col>
          <Col>
          <img src={xbox} alt="xbox" />
          <h5>Buy Xbox games.</h5>
          </Col>
          <Col>
          <img src={windowblack} alt='window-logo'/>
          <h5>Get Windows 11</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default IconsLink;
