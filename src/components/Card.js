import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Banner1 from "../assets/banner1.png";
import "./Card.css";


function Card() {
  return (
    <div>
      <Container>
        <Row>
          <Col style={{marginTop:200}}>
          <h2>Surface Laptop 4</h2>
          <p>Do it all with a perfect balance of sleek, ultra-thin design, multitasking speed and improved performance</p>
          <Button variant='dark'>Shop Now {`>`}</Button>
          </Col>
          <Col style={{marginTop:125}}>
          <img src={Banner1} alt="banner" id="banner-img"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Card;
