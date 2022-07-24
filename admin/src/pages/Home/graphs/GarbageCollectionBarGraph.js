import React from 'react';
import {Container , Row , Col } from "react-bootstrap";
import overviewImg from '../../../assets/images/overview.png'

const GarbageCollectionBarGraph = () => {
  return (
    <Container className="p-0 m-0" style={{border:'2px solid purple'}} fluid>
      <Row className="p-0 m-0">
        <Col sm={9} className="p-0 m-0">Add Graph</Col>
        <Col sm={3} className="p-0 m-0"><img src={overviewImg} width='100%' className='p-0 ' style={{border:'2px solid black'}}/></Col>
      </Row>

    </Container>
  );
}

export default GarbageCollectionBarGraph;
