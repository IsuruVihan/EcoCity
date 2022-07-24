import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

import ourMissionImg from '../../../assets/images/mission.png'
import garbageTruck from '../../../assets/images/garbage-truck-crop.png'

const OurMission = () => {
  return (
    <Container className="p-0" style={{border:'2px solid black'}} fluid>
      <Row className="p-0 m-0" style={{border:'2px solid pink'}}>
        <Col sm={2} className="p-0 m-0" style={{border:'2px solid green'}}>
          <img src={ourMissionImg}  width='100%' className='p-2' style={{border:'2px solid black' }} fluid/>
        </Col>
        <Col sm={8} className="p-0 m-0" style={{border:'2px solid green', textAlign:'center'}}>
          <Row className="p-0 m-0 m-5" style={{border:'2px solid black'}}>
          Manage garbage collections and garbage hubs in an automated way.
              With IoT-modified dustbins, citizens can get away of the contribution 
              to the renewable energy power stations in the country by disposing of the garbage.
              We hope to improve the productivity and efficiency of the garbage collection in 
              Sri lanka with our solution
          </Row>
        </Col>
        <Col sm={2} className="p-0 m-0 d-flex" style={{border:'2px solid green'}}>
          <img src={garbageTruck}  width='75%' height='100%' className='p-1' style={{border:'2px solid black'}} fluid/>
        </Col>
      </Row>
    </Container>
  );
}

export default OurMission;
