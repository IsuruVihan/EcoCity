import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import SideNav from "../../common/SideNav";
import RidesTableFilter from "./filters/RidesTableFilter";
import RidesTable from "./tables/RidesTable";
import ViewRideModal from "./modals/ViewRideModal";
import AssignRideModal from "./modals/AssignRideModal";
import Header from "../../common/Header";

const GarbageCollectionRides = () => {
  return (
      <Container className='mx-0 px-0 h-100 overflow-hidden' fluid>
          <Header/>
          <Row className='mx-0 mt-72 container-section' >
              <SideNav/>
              <Col className='' lg={10}>
                  Garbage collection rides
              </Col>
          </Row>
      </Container>
  );
}

export default GarbageCollectionRides;
