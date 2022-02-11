import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import card1 from "../assets/card1.jpeg";
import card2 from "../assets/card2.jpeg";
import card3 from "../assets/card3.jpeg";
import card4 from "../assets/card4.jpeg";


function Cards() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={card1} />
              <Card.Body>
                <Card.Title>Surface Laptop Go.</Card.Title>
                <Card.Text>
                  Make the most of every day with the sleek style and
                  performance of our lightest Surface laptop.
                </Card.Text>
                <Button variant="light" style={{ color: "blue" }}>
                  Shop Now {`>`}
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={card2} />
              <Card.Body>
                <Card.Title>Surface Go 3.</Card.Title>
                <Card.Text>
                  The most portable Surface 2-in-1 is perfect for your everyday tasks, homework, and play. Now available with Windows 11.
                </Card.Text>
                <Button variant="light" style={{ color: "blue" }}>
                  Shop Now {`>`}
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={card3}/>
              <Card.Body>
                <Card.Title>Xbox Game Pass Ultimate.</Card.Title>
                <Card.Text>
                  Get your first 8 months of membership for ₹ 699. Play on the devices you own. Includes EA Play. Offer available to new subscribers only and cannot be combined with any other offers.
                </Card.Text>
                <Button variant="light" style={{ color: "blue" }}>
                  Join Now {`>`}
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={card4} />
              <Card.Body>
                <Card.Title>Microsoft Edge.</Card.Title>
                <Card.Text>
                 World-class performance with more privacy, more productivity and more value while you browse.
                </Card.Text>
                <Button variant="light" style={{ color: "blue" }}>
                  Download Now {`>`}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cards;
