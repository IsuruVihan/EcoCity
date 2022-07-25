import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import SideNav from "../../../common/SideNav";
import GarbageHubsTable from "./tables/GarbageHubsTable";
import GarbageHubsTableFilter from "./filters/GarbageHubsTableFilter";
import GarbageHubsMap from "./maps/GarbageHubsMap";
import CreateGarbageHubModal from "./modals/CreateGarbageHubModal";
import GarbageHubDetailsModal from "./modals/GarbageHubDetailsModal";
import UpdateGarbageHubModal from "./modals/UpdateGarbageHubModal";
import Header from "../../../common/Header";

const GarbageHubs = () => {
  return (
      <Col className='' lg={10}>
          Garbage Hubs
      </Col>
      // <Container className='mx-0 px-0 h-100 overflow-hidden' fluid>
      //     <Header/>
      //     <Row className='mx-0 mt-72 container-section' >
      //         <SideNav/>
      //         <Col className='' lg={10}>
      //             Garbage Hubs
      //         </Col>
      //     </Row>
      // </Container>
  );
}

export default GarbageHubs;
