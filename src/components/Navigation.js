import React from "react";
import { Nav, Navbar, Container, Dropdown } from "react-bootstrap";
import logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" style={{height:23} } />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#micorsoft365">Microsoft 365</Nav.Link>
            <Nav.Link href="#office">Office</Nav.Link>
            <Nav.Link href="#windows">Windows</Nav.Link>
            <Nav.Link href="#surface">Surface</Nav.Link>
            <Nav.Link href="#xbox">Xbox</Nav.Link>
            <Nav.Link href="#support">Support</Nav.Link>
          </Nav>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              All Microsoft
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Windows Apps</Dropdown.Item>
              <Dropdown.Item href="#/action-2">One Drive</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Outlook</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Skype</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Microsoft Teams</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          Search&nbsp;&nbsp;&nbsp;
          <i class="fa-solid fa-magnifying-glass"></i>
          &nbsp;&nbsp;&nbsp;Cart&nbsp;&nbsp;&nbsp;
          <i class="fa-solid fa-cart-shopping"></i>
          &nbsp;&nbsp;&nbsp;Sign Up&nbsp;&nbsp;&nbsp;
          <i class="fa-solid fa-arrow-right-to-bracket"></i>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
