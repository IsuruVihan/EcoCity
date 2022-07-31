import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";

import TruckDriver from '../../../assets/images/driver-profile.png';
import Crew from '../../../assets/images/crew-profile.png';
import Hub from '../../../assets/images/hub.png';
import House from '../../../assets/images/house-profile.png';

const CountCard = () => {
  return (
    <Container className="p-0">
      <Row className="m-0">
          <Col sm={12} className="p-0 mb-3" style={{border: '2px solid #BFDDDE', borderRadius: '20px'}}>
              <Row className="m-0">
                  <Col lg={6} className="p-0 mt-3 d-flex align-items-center justify-content-center">
                      <Image src={TruckDriver} width='35%'/>
                  </Col>
                  <Col lg={6} className="p-0 mt-3" style={{
                      color: '#042434', display: "flex", alignItems: "center", justifyContent: "flex-start", fontSize: '13px'}}>Truck Drivers</Col>
                  <Col lg={12} className="p-0" style={{
                      fontWeight: 700, fontSize: 55, color: '#042434', textAlign: "center"}}>26</Col>
              </Row>
          </Col>
          <Col sm={12} className="p-0 mb-3" style={{border: '2px solid #BFDDDE', borderRadius: '20px'}}>
              <Row className="m-0">
                  <Col lg={6} className="p-0 mt-3 d-flex align-items-center justify-content-center">
                      <Image src={Crew} width='35%'/>
                  </Col>
                  <Col lg={6} className="p-0 mt-3" style={{
                      color: '#042434', display: "flex", alignItems: "center", justifyContent: "flex-start", fontSize: '13px'}}>Maintenance</Col>
                  <Col lg={12} className="p-0" style={{
                      fontWeight: 700, fontSize: 55, color: '#042434', textAlign: "center"}}>13</Col>
              </Row>
          </Col>
          <Col sm={12} className="p-0 mb-3" style={{border: '2px solid #BFDDDE', borderRadius: '20px'}}>
              <Row className="m-0">
                  <Col className="p-0 mt-3 d-flex align-items-center justify-content-center">
                      <Image src={Hub} width='35%'/>
                  </Col>
                  <Col lg={6} className="p-0 mt-3" style={{
                      color: '#042434', display: "flex", alignItems: "center", justifyContent: "flex-start", fontSize: '13px'}}>Garbage Hubs</Col>
                  <Col lg={12} className="p-0" style={{
                      fontWeight: 700, fontSize: 55, color: '#042434', textAlign: "center"}}>11</Col>
              </Row>
          </Col>
          <Col sm={12} className="p-0" style={{border: '2px solid #BFDDDE', borderRadius: '20px'}}>
              <Row className="m-0">
                  <Col className="p-0 mt-3 d-flex align-items-center justify-content-center">
                      <Image src={House} width='35%'/>
                  </Col>
                  <Col lg={6} className="p-0 mt-3" style={{
                      color: '#042434', display: "flex", alignItems: "center", justifyContent: "flex-start", fontSize: '13px'}}>Houses</Col>
                  <Col lg={12} className="p-0" style={{
                      fontWeight: 700, fontSize: 55, color: '#042434', textAlign: "center"}}>73</Col>
              </Row>
          </Col>
      </Row>
    </Container>
  );
}

export default CountCard;
