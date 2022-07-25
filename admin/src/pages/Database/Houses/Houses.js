import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import SideNav from "../../../common/SideNav";
import HousesMap from "./maps/HousesMap";
import HousesTableFilter from "./filters/HousesTableFilter";
import HousesTable from "./tables/HousesTable";
import ViewHouseModal from "./modals/ViewHouseModal";
import CreateHouseModal from "./modals/CreateHouseModal";
import UpdateHouseModal from "./modals/UpdateHouseModal";
import Header from "../../../common/Header";

const Houses = () => {
  return (
      <Col className='' lg={10}>
          Houses
      </Col>
      // <Container className='mx-0 px-0 h-100 overflow-hidden' fluid>
      //     <Header/>
      //     <Row className='mx-0 mt-72 container-section' >
      //         <SideNav/>
      //         <Col className='' lg={10}>
      //             Houses
      //         </Col>
      //     </Row>
      // </Container>
  );
}

export default Houses;
