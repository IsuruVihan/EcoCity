import React from 'react';
import {Container , Row , Col } from "react-bootstrap";

import BinTypeStatus from "./cards/BinTypeStatus";
import OurMission from "./cards/OurMission";
import GarbageCollectionBarGraph from "./graphs/GarbageCollectionBarGraph";
import TeamMemberCard from "./cards/TeamMemberCard";
import Header from "../../common/Header";
import Footer from '../../common/Footer';
import sideImageWeb from '../../assets/images/web-homepage.png'
import './Home.css'

const Home = () => {
  return (
    <Container className="p-0 homeHeader"fluid>
      <Row className='p-0 m-0' style={{border:'2px solid orange'}}><Header/></Row>
      <Row className='p-0 m-0' style={{border:'2px solid orange'}}>
        <img src={sideImageWeb} className='p-0'/>
      </Row>
      <Row className='p-0 m-0' style={{border:'2px solid orange'}}><OurMission/></Row>
      <Row className='p-0 m-0' style={{border:'2px solid orange'}}>
        <Col sm={3} className='p-0 m-0' style={{border:'2px solid black'}}><BinTypeStatus/></Col>
        <Col sm={9} className='p-0 m-0' style={{border:'2px solid black'}}><GarbageCollectionBarGraph/></Col>
      </Row>
      <Row className='p-0 m-0' style={{border:'2px solid orange'}}><TeamMemberCard/></Row>
      <Row className='p-0 m-0'><Footer/></Row>
    </Container>
  );
}

export default Home;
