import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import SideNav from "../../../common/SideNav";
import MaintenanceCrewMap from "./maps/MaintenanceCrewMap";
import MaintenanceCrewTable from "./tables/MaintenanceCrewTable";
import MaintenanceCrewTableFilter from "./filters/MaintenanceCrewTableFilter";
import MaintenanceCrewMemberViewModal from "./modals/MaintenanceCrewMemberViewModal";
import CreateMaintenanceCrewMemberModal from "./modals/CreateMaintenanceCrewMemberModal";
import UpdateMaintenanceCrewMemberModal from "./modals/UpdateMaintenanceCrewMemberModal";
import Header from "../../../common/Header";

const MaintenanceCrewMembers = () => {
  return (
      <Container className='mx-0 px-0 h-100 overflow-hidden' fluid>
          <Header/>
          <Row className='mx-0 mt-72 container-section' >
              <SideNav/>
              <Col className='' lg={10}>
                  Maintenance crew members
              </Col>
          </Row>
      </Container>
  );
}

export default MaintenanceCrewMembers;
