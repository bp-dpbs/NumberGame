import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import NumberSvg from "../../assets/number.svg";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/game");
  };

  return (
    <Container fluid style={{ margin: "10px 0" }}>
      <Card style={{ width: "18rem", margin: "0 auto" }}>
        <NumberSvg />
        <Card.Body>
          <Card.Title>Number Game</Card.Title>
          <Card.Text>
            Click on below button to start playing with numbers
          </Card.Text>
          <Button onClick={handleClick} variant="primary">Start</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};
