import React from "react";
import {Col, Container, Row } from "react-bootstrap";
import banner from "../assets/carousel5.jpeg";
import "./Banner.css";

function Banner() {
  return (
    <Container>
      <Row>
        <Col>
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide position-relative"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src={banner}
                  class="d-block w-100"
                  alt="banner"
                  id="banner-img"
                />
                <div class=" position-absolute banner-customize">
                  <h2>Microsoft OneDrive</h2>
                  <p>
                    Save your files and photos to OneDrive and access them from
                    any device, anywhere
                  </p>
                  <button class="btn btn-dark" onClick={()=>alert("Thank You")}>Learn More {`>`}</button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
