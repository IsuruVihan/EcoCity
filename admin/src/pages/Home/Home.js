import React from 'react';
import {Container} from "react-bootstrap";

import BinTypeStatus from "./cards/BinTypeStatus";
import OurMission from "./cards/OurMission";
import GarbageCollectionBarGraph from "./graphs/GarbageCollectionBarGraph";
import TeamMemberCard from "./cards/TeamMemberCard";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

const Home = () => {
  return (
    <Container className='d-flex justify-content-around mx-0 px-0' fluid>
      {/*<Header />*/}

        <Footer />
    </Container>
  );
}

export default Home;
