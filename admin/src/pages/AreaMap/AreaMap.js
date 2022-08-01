import React from 'react';
import {Col, Container, Row} from "react-bootstrap";


import SideNav from "../../common/SideNav";
import Map from "./maps/Map";
import MainFilter from "./filters/MainFilter";
import Header from "../../common/Header";
import hubArea from '../../assets/images/hub.png';
import garbageTruck from '../../assets/images/garbage-truck.png';
import maintenanceTruck from '../../assets/images/maintenance-truck.png';
import './AreaMap.css';

const AreaMap = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(current => !current);

  };
  return (
    <Col className='p-0' lg={10}>
      <Row className='p-0 mt-4 m-0' style={{border: '2px solid red',}}>
        <Col sm={2} className='p-0 m-0' style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 35,
          fontWeight: 900,
          color: '#042434',
          border: '2px solid red'}}>Area Map</Col>
        <Col sm={4} className='pr-2 m-0' style={{border: '2px solid red'}}></Col>
        <Col sm={2} className='p-1' style={{margin: 'auto'}}>
          <Row className='p-0 m-0 areamap-filter'
               style={{borderRadius: '10px', boxShadow: '2px 4px 8px lightgray', cursor: 'pointer'}}>
            <Col sm={4} className='p-1 m-0'
                 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img src={hubArea}width='38px'/></Col>
            <Col sm={8} className='p-0 m-0'
                 style={{display: 'flex', alignItems: 'center', fontSize: 13, fontWeight: 600, color: '#7CB6B8'}}>GarbageHubs</Col>
          </Row>
        </Col>
        <Col sm={2} className='p-1' style={{margin: 'auto'}}>
          <Row className='p-0 m-0 areamap-filter'
               style={{borderRadius: '10px', boxShadow: '2px 4px 8px lightgray', cursor: 'pointer'}}>
            <Col sm={4} className='p-1 m-0'
                 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img src={garbageTruck}width='40px'/></Col>
            <Col sm={8} className='p-0 m-0'
                 style={{display: 'flex', alignItems: 'center', fontSize: 13, fontWeight: 600, color: '#7CB6B8'}}>Garbage
              Trucks</Col>
          </Row>
        </Col>
        <Col sm={2} className='p-1' style={{margin: 'auto'}}>
          <Row className='p-0 m-0 areamap-filter'
               style={{borderRadius: '10px', boxShadow: '2px 4px 8px lightgray', cursor: 'pointer'}}>
            <Col sm={4} className='p-1 m-0'
                 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img src={maintenanceTruck}width='40px'/></Col>
            <Col sm={8} className='p-0 m-0'
                 style={{display: 'flex', alignItems: 'center', fontSize: 13, fontWeight: 600, color: '#7CB6B8'}}>Maintenance
              Crew</Col>
          </Row>
        </Col>
      </Row>
      <Row className='p-0 m-0' style={{height: '488px'}}></Row>
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
