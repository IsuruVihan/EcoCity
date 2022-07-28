import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import SideNav from "../../common/SideNav";
import Map from "./maps/Map";
import MainFilter from "./filters/MainFilter";
import Header from "../../common/Header";
import hubArea from '../../assets/images/hub.png';
import garbageTruck from '../../assets/images/garbage-truck.png';
import maintenanceTruck from '../../assets/images/maintenance-truck.png';

const AreaMap = () => {
  return (
      <Col className='p-0' lg={10}> 
          <Row className='p-0 mt-4 m-0' style={{border:'2px solid orange'}}>
            <Col sm={2} className='p-0 m-0' style={{border:'2px solid black', display:'flex', justifyContent:'center', alignItems:'center'}}>Area Map</Col>
            <Col sm={1} className='pr-2 m-0' style={{border:'2px solid black'}}></Col>
            <Col sm={3} className='p-0' style={{border:'2px solid black', margin:'auto'}}>
              <Row className='p-0 m-0' style={{border:'2px solid purple'}}>
                <Col sm={2} className='p-0 m-0' style={{border:'2px solid green', display:'flex',justifyContent:'center', alignItems:'center'}}>1</Col>
                <Col sm={8} className='p-0 m-0' style={{border:'2px solid green', display:'flex',alignItems:'center',fontSize:14, fontWeight:600}}>Garbage Hubs</Col>
                <Col sm={2} className='p-0 m-0' style={{border:'2px solid green', display:'flex',justifyContent:'center', alignItems:'center'}}>img</Col>
              </Row>
            </Col>
            <Col sm={3} className='p-0' style={{border:'2px solid black',margin:'auto'}}>
              <Row className='p-0 m-0' style={{border:'2px solid purple'}}>
                <Col sm={2} className='p-0 m-0' style={{border:'2px solid green', display:'flex',justifyContent:'center', alignItems:'center'}}>2</Col>
                <Col sm={7} className='p-0 m-0' style={{border:'2px solid green', display:'flex', alignItems:'center',fontSize:14, fontWeight:600}}>Garbage Trucks</Col>
                <Col sm={3} className='p-0 m-0' style={{border:'2px solid green', display:'flex',justifyContent:'center', alignItems:'center'}}>img</Col>
              </Row>
            </Col>
            <Col sm={3} className='p-0' style={{border:'2px solid black',margin:'auto'}}>
              <Row className='p-0 m-0' style={{border:'2px solid purple'}}>
                <Col sm={2} className='p-0 m-0' style={{border:'2px solid green', display:'flex',justifyContent:'center', alignItems:'center'}}>3</Col>
                <Col sm={7} className='p-0 m-0' style={{border:'2px solid green', display:'flex', alignItems:'center',fontSize:14, fontWeight:600}}>Maintenance Crew</Col>
                <Col sm={3} className='p-0 m-0' style={{border:'2px solid green', display:'flex',justifyContent:'center', alignItems:'center'}}>img</Col>
              </Row>
            </Col>
          </Row>
          <Row className='p-0 m-0' style={{border:'2px solid orange', height:'488px'}}>Image</Row>
      </Col>
      // <Container className='mx-0 px-0 h-100 overflow-hidden' fluid>
      //     <Header/>
      //     <Row className='mx-0 mt-72 container-section' >
      //         <SideNav/>
      //         <Col className='' lg={10}>
      //             Area Map
      //         </Col>
      //     </Row>
      // </Container>
  );
}

export default AreaMap;