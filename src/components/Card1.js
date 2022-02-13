import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function Card1(props) {
  return (
    <div>
      <Container>
         
        <Row  style={{marginTop:"2rem"}}>
        <h4>For Business</h4>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={props.card5} />
              <Card.Body>
                <Card.Title>Surface for Business</Card.Title>
                <Card.Text>
                No matter what you do, there’s a Surface to help you do it.
                </Card.Text>
                <Button variant="light" style={{ color: "blue" }}>
                  Shop Now {`>`}
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={props.card6} />
              <Card.Body>
                <Card.Title>Great solutions for your school</Card.Title>
                <Card.Text>
                Accelerate the power of learning with inclusive, accessible and affordable Windows 11 and Windows 11 SE devices for your K-12 school district and students.
                </Card.Text>
                <Button variant="light" style={{ color: "blue" }}>
                  Learn more {`>`}
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={props.card7} />
              <Card.Body>
                <Card.Title>Get Microsoft Teams for free</Card.Title>
                <Card.Text>
                Online meetings, chat and shared cloud storage – all in one place.
                </Card.Text>
                <Button variant="light" style={{ color: "blue" }}>
                  Sign Up for free {`>`}
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={props.card8} />
              <Card.Body>
                <Card.Title>Welcome to your Windows 365 Cloud PC</Card.Title>
                <Card.Text>
                Securely stream your Windows experience from the Microsoft cloud to any device.
                </Card.Text>
                <Button variant="light" style={{ color: "blue" }}>
                  Get it Today {`>`}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Card1;
