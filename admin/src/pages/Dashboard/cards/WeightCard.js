import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";

const WeightCard = () => {
  return (
    <Container className="p-0">
      <Row className="m-0" style={{border: '2px solid green'}}>
          <Col className="p-0" sm="12"></Col>
          <Col className="p-0" sm="12"></Col>
      </Row>
    </Container>
  );
}

export default WeightCard;
