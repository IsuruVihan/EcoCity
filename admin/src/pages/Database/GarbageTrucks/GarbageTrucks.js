import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import SideNav from "../../../common/SideNav";
import TrucksMap from "./maps/TrucksMap";
import TrucksTable from "./tables/TrucksTable";
import TrucksTableFilter from "./filters/TrucksTableFilter";
import TruckDetailsModal from "./modals/TruckDetailsModal";
import CreateTruckModal from "./modals/CreateTruckModal";
import UpdateTruckModal from "./modals/UpdateTruckModal";
import Header from "../../../common/Header";

const GarbageTrucks = () => {
  return (
      <Col className='' lg={10}>
          Garbage Trucks
      </Col>
      // <Container className='mx-0 px-0 h-100 overflow-hidden' fluid>
      //     <Header/>
      //     <Row className='mx-0 mt-72 container-section' >
      //         <SideNav/>
      //         <Col className='' lg={10}>
      //             Garbage Trucks
      //         </Col>
      //     </Row>
      // </Container>
  );
}

export default GarbageTrucks;
