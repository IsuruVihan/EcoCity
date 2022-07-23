import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import SideNav from "../../common/SideNav";
import ComplaintsTableFilter from "./filters/ComplaintsTableFilter";
import ComplaintsTable from "./tables/ComplaintsTable";
import ViewComplaintModal from "./modals/ViewComplaintModal";
import Header from "../../common/Header";

const Complaints = () => {
  return (
      <Container className='mx-0 px-0 h-100 overflow-hidden' fluid>
          <Header/>
          <Row className='mx-0 mt-72 container-section' >
              <SideNav/>
              <Col className='' lg={10}>
                  Complaints
              </Col>
          </Row>
      </Container>
  );
}

export default Complaints;
