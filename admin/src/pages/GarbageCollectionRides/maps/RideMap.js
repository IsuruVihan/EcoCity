import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

const RideMap = () => {
  return (
          <Col style={{border:'1px solid red', marginBottom:15}}>
              <Row style={{fontSize:14}}>Location</Row>
              <Row style={{border:'1px solid blue', height:85, borderRadius:10}}>Map</Row>
          </Col>
  );
}

export default RideMap;
