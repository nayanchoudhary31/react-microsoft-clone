import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <Container>
        <Row className="footer-row">
          <Col className="footer-col">
            <ul>
              <p>What's new</p>
              <li>Microsoft 365</li>
              <li>Surface Pro X</li>
              <li>Surface Laptop 3</li>
              <li>Windows 11 apps</li>
            </ul>
          </Col>
          <Col className="footer-col">
            <ul>
              <p>Microsoft Store</p>
              <li>Account Profile</li>
              <li>Download Center</li>
              <li>Microsoft Store Support</li>
              <li>Returns</li>
              <li>Order Tracking</li>
            </ul>
          </Col>
          <Col className="footer-col">
            <ul>
              <p>Education</p>
              <li>Account Profile</li>
              <li>Download Center</li>
              <li>Microsoft Store Support</li>
              <li>Returns</li>
              <li>Order Tracking</li>
            </ul>
          </Col>
          <Col className="footer-col">
            <ul>
              <p>Enterprise</p>
              <li>Azure</li>
              <li>AppSource</li>
              <li>Automotive</li>
              <li>Govermment</li>
              <li>Healthcare</li>
              <li>Manufacturing</li>
              <li>Financial Services</li>
              <li>Retail</li>
            </ul>
          </Col>
          <Col className="footer-col">
            <ul>
              <p>Developer</p>
              <li>Microsoft Visual Studio</li>
              <li>Developer Center</li>
              <li>Channel 9</li>
              <li>Microsoft 365 Dev Center</li>
              <li>Microsoft 365 Developer Program</li>
            </ul>
          </Col>
          <Col className="footer-col">
            <ul>
              <p>Company</p>
              <li>Careers</li>
              <li>About Microsoft</li>
              <li>Company News</li>
              <li>Privacy at Microsoft</li>
              <li>Investors</li>
              <li>Security</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
