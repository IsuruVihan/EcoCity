import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import SideNav from "../../common/SideNav";
import JobsTableFilter from "./filters/JobsTableFilter";
import JobsTable from "./tables/JobsTable";
import ViewJobModal from "./modals/ViewJobModal";
import AssignJobModal from "./modals/AssignJobModal";
import Header from "../../common/Header";

const MaintenanceJobs = () => {
  return (
      <Container className='mx-0 px-0 h-100 overflow-hidden' fluid>
          <Header/>
          <Row className='mx-0 mt-72 container-section' >
              <SideNav/>
              <Col className='' lg={10}>
                  Maintenance
              </Col>
          </Row>
      </Container>
  );
}

export default MaintenanceJobs;
