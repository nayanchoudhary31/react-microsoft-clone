import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./IconsLink.css";
import windowblack from "../assets/window-black.png";
import surface from "../assets/surface.png";
import xbox from "../assets/xbox.png";
function IconsLink() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <ul className="ul-container">
              <li>
                <a href="/">
                  <img  src={windowblack} alt="" />
                  <div>Choose your Microsoft</div>
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={surface} alt="" />
                  <div>Explore Surface Device</div>
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={xbox} alt="" />
                  <div>Buy Xbox games</div>
                </a>
              </li>
              <li>
                <a href="/">
                  <img src={windowblack} alt="" />
                  <div>Get Windows</div>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default IconsLink;
