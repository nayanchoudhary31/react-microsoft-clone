import React from "react";
import "./Carousel.css";
import carousel1 from "../assets/carousel1.jpeg";
import carousel2 from "../assets/carosel4.jpeg";

function Carousel() {
  return (
    <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide position-relative"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src={carousel1} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block banner-customize ">
            <h5>Surface Laptop 4</h5>
            <p>
              Do it all with a perfect balance of sleek, ultra-thin design,
              multitasking speed and improved performance
            </p>
            <button class="btn btn-dark" onClick={() => alert("Thank You")}>
              Shop Now {`>`}
            </button>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src={carousel2} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block banner-customize">
            <h5>Microsoft 365</h5>
            <p>
              Premium Office apps, extra cloud storage, advanced security, and
              more all in one convenient subscription.
            </p>
            <button class="btn btn-dark" onClick={() => alert("Thank You.")}>
              For Up to 6 People{`>`}
            </button>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev banner-size"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next banner-size"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
