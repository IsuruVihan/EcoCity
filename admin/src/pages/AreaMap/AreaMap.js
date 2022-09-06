import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import {useState} from 'react';


import SideNav from "../../common/SideNav";
import Map from "./maps/Map";
import MainFilter from "./filters/MainFilter";
import Header from "../../common/Header";
import hubArea from '../../assets/images/hub.png';
import garbageTruck from '../../assets/images/garbage-truck.png';
import maintenanceTruck from '../../assets/images/maintenance-truck.png';
import './AreaMap.css';
import areaMap from '../../assets/images/temp/areaMap.png';

const AreaMap = () => {
    const [isGHubsVisible, setIsGHubsVisible] = useState(true);
    const [isGTrucksVisible, setIsGTrucksVisible] = useState(false);
    const [isMMembersVisible, setIsMMembersVisible] = useState(false);

    return (
        <Col className='px-4' lg={10}>
            <Row className='p-0 mt-4 m-0'>
                <Col sm={2} className='p-0 m-0' style={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    fontSize: 35,
                    fontWeight: 900,
                    color: '#042434',
                }}>Area Map</Col>
                <Col sm={4} className='pr-2 m-0'></Col>
                <Col sm={2} className='p-1' style={{margin: 'auto'}}>
                    <Row className='p-0 m-0 areamap-filter'
                         style={{
                             borderRadius: '10px',
                             boxShadow: '2px 4px 8px lightgray',
                             cursor: 'pointer',
                             backgroundColor: isGHubsVisible ? '#effbfc' : ''
                         }} onClick={() => setIsGHubsVisible(!isGHubsVisible)}>
                        <Col sm={4} className='p-1 m-0'
                             style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img
                            src={hubArea} width='38px'/></Col>
                        <Col sm={8} className='p-0 m-0'
                             style={{
                                 display: 'flex',
                                 alignItems: 'center',
                                 fontSize: 13,
                                 fontWeight: 600,
                                 color: '#7CB6B8'
                             }}>Garbage Hubs</Col>
                    </Row>
                </Col>
                <Col sm={2} className='p-1' style={{margin: 'auto'}}>
                    <Row className='p-0 m-0 areamap-filter'
                         style={{
                             borderRadius: '10px',
                             boxShadow: '2px 4px 8px lightgray',
                             cursor: 'pointer',
                             backgroundColor: isGTrucksVisible ? '#effbfc' : ''
                         }} onClick={() => setIsGTrucksVisible(!isGTrucksVisible)}>
                        <Col sm={4} className='p-1 m-0'
                             style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img
                            src={garbageTruck} width='40px'/></Col>
                        <Col sm={8} className='p-0 m-0'
                             style={{
                                 display: 'flex',
                                 alignItems: 'center',
                                 fontSize: 13,
                                 fontWeight: 600,
                                 color: '#7CB6B8'
                             }}>Garbage Trucks</Col>
                    </Row>
                </Col>
                <Col sm={2} className='p-1' style={{margin: 'auto'}}>
                    <Row className='p-0 m-0 areamap-filter'
                         style={{
                             borderRadius: '10px',
                             boxShadow: '2px 4px 8px lightgray',
                             cursor: 'pointer',
                             backgroundColor: isMMembersVisible ? '#effbfc' : ''
                         }} onClick={() => setIsMMembersVisible(!isMMembersVisible)}>
                        <Col sm={4} className='p-1 m-0'
                             style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img
                            src={maintenanceTruck} width='40px'/></Col>
                        <Col sm={8} className='p-0 m-0'
                             style={{
                                 display: 'flex',
                                 alignItems: 'center',
                                 fontSize: 13,
                                 fontWeight: 600,
                                 color: '#7CB6B8'
                             }}>Maintenance Crew</Col>
                    </Row>
                </Col>
            </Row>
            <Row className='p-0 mx-0 mt-2 d-flex align-items-end bg-white shadow-effect' style={{height: "540px"}}>
                <Map showHubs={isGHubsVisible} showGTrucks={isGTrucksVisible} showMMembers={isMMembersVisible}/>
            </Row>
        </Col>

    );
}

export default AreaMap;
