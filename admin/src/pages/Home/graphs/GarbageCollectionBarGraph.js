import React from 'react';
import {Container , Row , Col } from "react-bootstrap";

import overviewImg from '../../../assets/images/overview.png'

const GarbageCollectionBarGraph = () => {
  return (
    <Container className="p-0 m-0"fluid>
      <Row className="p-0 m-0">
        <Col sm={9} className="p-0 m-0"></Col>
        <Col sm={3} className="p-0 m-0"><img src={overviewImg} width='80%' className='p-0 ' style={{padding:'40px'}}/></Col>
      </Row>
    </Container>
  );
}
export default GarbageCollectionBarGraph;
