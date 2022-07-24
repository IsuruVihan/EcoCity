import React from 'react';
import {Container , Row , Col } from "react-bootstrap";
import './Home.css'

import BinTypeStatus from "./cards/BinTypeStatus";
import OurMission from "./cards/OurMission";
import GarbageCollectionBarGraph from "./graphs/GarbageCollectionBarGraph";
import TeamMemberCard from "./cards/TeamMemberCard";
import Header from "../../common/Header";
import Footer from '../../common/Footer';
import memberIcon from '../../assets/images/our-group.png'

const Home = () => {
  return (
    <div className='homeHeader'>
      <Header />
      <div className='containerHome'>
        <Container  fluid className='border'>
          <div className='homePage'></div>
        
        </Container>
        <div className='ourMission border'>
          <OurMission/>
        </div>
        <div>
          <Row fluid>
            <Col sm={4} className='binType border'>
              <BinTypeStatus/>
            </Col>

            <Col sm={8} className='bargraph border'>
              <GarbageCollectionBarGraph/>
            </Col>

          </Row>

        </div>
        <div className='groupMembers-icon border'></div>
        <TeamMemberCard/>

        <Footer/>

      </div>

    </div>

  
  );
}

export default Home;
