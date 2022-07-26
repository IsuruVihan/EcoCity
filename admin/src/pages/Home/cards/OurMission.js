import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

import ourMissionImg from '../../../assets/images/mission.png'
import garbageTruck from '../../../assets/images/garbage-truck-crop.png'

const OurMission = () => {
  return (
    <Container className="p-0" fluid>
      <Row className="p-0 m-0">
        <Col sm={2} className="p-0 m-0">
          <img src={ourMissionImg}  width='100%' className='p-2' style={{ padding:'3px' }} fluid/>
        </Col>
        <Col sm={8} className="p-0 m-0" style={{textAlign:'center'}}>
          <Row className="p-0 m-0 m-5" style={{color:'#042434', fontWeight:'600'}}>
              Manage garbage collections and garbage hubs in an automated way.
              With IoT-modified dustbins, citizens can get away of the contribution 
              to the renewable energy power stations in the country by disposing of the garbage.
              We hope to improve the productivity and efficiency of the garbage collection in 
              Sri lanka with our solution
          </Row>
        </Col>
        <Col sm={2} className="p-0 m-0 d-flex">
          <img src={garbageTruck} width='100%' className='p-0' style={{width:'210px', height:'230px'}} fluid/>
        </Col>
      </Row>
    </Container>
  );
}
export default OurMission;
