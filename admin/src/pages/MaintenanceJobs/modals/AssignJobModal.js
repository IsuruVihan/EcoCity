import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";

import AssignJobForm from "../forms/AssignJobForm";
import modelimage1 from "../../../assets/images/view-complaint.png"

const AssignJobModal = () => {
  return (
    <Container className='p-0 m-0'>
      <Row className='p-0 m-0' style={{border:'2px solid green'}}>
        <Col className={'m-0 p-0'} style={{textAlign:'center'}}>
          <Image src={modelimage1} fluid style={{width:'20%'}}/>
        </Col>
      </Row>
      <Row className='p-3 m-0'>
        <Row className='p-0 m-0' style={{border:'2px solid green'}}>
          <Col sm={6} className='p-0 m-0' style={{border:'2px solid blue'}}>Crew Member</Col>
          <Col sm={6} className='p-0 m-0' style={{border:'2px solid blue'}}>Garbage Hub ID</Col>
        </Row>
        <Row className='p-0 m-0' style={{border:'2px solid green'}}>
        <Col sm={6} className='p-0 m-0' style={{border:'2px solid blue'}}>Garbage Bin Type</Col>
        <Col sm={6} className='p-0 m-0' style={{border:'2px solid blue'}}>Description</Col>
        </Row>
        <Row className='p-0 m-0' style={{border:'2px solid green'}}>
        <Col sm={4} className='p-0 m-0' style={{border:'2px solid blue'}}>Fill Level</Col>
        <Col  sm={4} className='p-0 m-0' style={{border:'2px solid blue'}}>Temperature</Col>
        <Col  sm={4} className='p-0 m-0' style={{border:'2px solid blue'}}>Humidity</Col>
        </Row>
        <Row className='p-0 m-0' style={{border:'2px solid green'}}>
          <Col sm={6} className='p-0 m-0' style={{border:'2px solid blue'}}>Location</Col>
          <Col sm={6} className='p-0 m-0' style={{border:'2px solid blue'}}>Filter</Col>
        </Row>
        <Row className='p-0 m-0' style={{border:'2px solid green'}}>Map Image</Row>
        <Row className='p-0 m-0' style={{border:'2px solid green'}}>Assign Button</Row>
      </Row>


    </Container>
  );
}

export default AssignJobModal;
