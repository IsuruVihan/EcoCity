import React from 'react';
import {Container} from "react-bootstrap";

import BinTypeStatus from "./cards/BinTypeStatus";
import OurMission from "./cards/OurMission";
import GarbageCollectionBarGraph from "./graphs/GarbageCollectionBarGraph";
import TeamMemberCard from "./cards/TeamMemberCard";
import Header from "../../common/Header";

const Home = () => {
  return (
    <Container className='mx-1 d-flex justify-content-around'>
      <Header />
    </Container>
  );
}

export default Home;
