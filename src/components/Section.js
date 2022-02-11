import React from "react";
import { Container } from "react-bootstrap";
import windowsblack from "../assets/window-black.png";
import xbox from "../assets/xbox.png";
import surfaces from "../assets/surface.png";

function Section() {
  return (
    <div>
      <Container>
        <ul>
          <li>
            <img src={windowsblack} alt="" />
            <h5>Choose Your Microsoft 365.</h5>
          </li>
          <li>
            <img src={surfaces} alt="" />
            <h5>Explore Surface Devices.</h5>
          </li>
          <li>
            <img src={xbox} alt="" />
            <h5>Buy Xbox Games</h5>
          </li>
          <li>
            <img src={windowsblack} alt="" />
            <h5>Get Windows 11.</h5>
          </li>
        </ul>
        <button className="btn btn-primary">jhkjhkkhk</button>
      </Container>
    </div>
  );
}

export default Section;
