import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import SideNav from "../../common/SideNav";
import Map from "./maps/Map";
import MainFilter from "./filters/MainFilter";
import Header from "../../common/Header";

const AreaMap = () => {
  return (
      <Container className='mx-0 px-0 h-100 overflow-hidden' fluid>
          <Header/>
          <Row className='mx-0 mt-72 container-section' >
              <SideNav/>
              <Col className='' lg={10}>
                  Area Map
              </Col>
          </Row>
      </Container>
  );
}

export default AreaMap;
