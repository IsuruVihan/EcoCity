import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";

import JobMap from "../maps/JobMap";
import modelimage from "../../../assets/images/view-complaint.png";

const ViewJobModal = () => {
  return (
    <Container className={'m-0 p-0'} style={{border:'2px solid blue'}}>
        <Row className={'m-0 p-0'} style={{border:'2px solid black'}}>
            <Col className={'m-0 p-0'} style={{textAlign:'center', border:'2px solid red'}}>
                <Image src={modelimage} fluid style={{width:'25%', border:'2px solid green'}}/>
            </Col>
        </Row>
        <Row className={'m-0 p-3'} style={{fontSize:13}}>
          <Row className={'m-0 p-0'} style={{border:'2px solid black'}}>
            <Col className={'m-0 p-0'} sm={2} style={{border:'2px solid purple'}}>Job Status</Col>
            <Col className={'m-0 p-0'} sm={10} style={{border:'2px solid purple'}}>Assigned Col</Col>
          </Row>
          <Row className={'m-0 p-0'} style={{border:'2px solid black'}}>
            <Col className={'m-0 p-0'} sm={6} style={{border:'2px solid purple'}}>Job ID</Col>
            <Col className={'m-0 p-0'} sm={3}style={{border:'2px solid purple'}}>Garbage Hub ID</Col>
            <Col className={'m-0 p-0'}sm={3}style={{border:'2px solid purple'}}>Garbage Hub Type</Col>
          </Row>
          <Row className={'m-0 p-0'} style={{border:'2px solid black'}}>
            <Col className={'m-0 p-0'}sm={6} style={{border:'2px solid purple'}}>Assigned Date</Col>
            <Col className={'m-0 p-0'} sm={6} style={{border:'2px solid purple'}}>Description</Col>
          </Row>
          <Row className={'m-0 p-0'} style={{border:'2px solid black'}}>
            <Col className={'m-0 p-0'} sm={6} style={{border:'2px solid purple'}}>Assigned Crew Member</Col>
            <Col className={'m-0 p-0'} sm={6} style={{border:'2px solid purple'}}>Crew Member ID</Col>
          </Row>
          <Row className={'m-0 p-0'} style={{border:'2px solid black'}}>Location</Row>
          <Row className={'m-0 p-0'} style={{border:'2px solid black'}}>Map</Row>
        </Row>


    </Container>
  );
}

export default ViewJobModal;
