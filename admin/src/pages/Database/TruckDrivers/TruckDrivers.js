import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import SideNav from "../../../common/SideNav";
import TruckDriversMap from "./maps/TruckDriversMap";
import TruckDriversTable from "./tables/TruckDriversTable";
import TruckDriversTableFilter from "./filters/TruckDriversTableFilter";
import CreateTruckDriverModal from "./modals/CreateTruckDriverModal";
import ViewTruckDriverModal from "./modals/ViewTruckDriverModal";
import UpdateTruckDriverModal from "./modals/UpdateTruckDriverModal";
import Header from "../../../common/Header";

const TruckDrivers = () => {
  return (
      <Container className='mx-0 px-0 h-100 overflow-hidden' fluid>
          <Header/>
          <Row className='mx-0 mt-72 container-section' >
              <SideNav/>
              <Col className='' lg={10}>
                  Truck Drivers
              </Col>
          </Row>
      </Container>
  );
}

export default TruckDrivers;
