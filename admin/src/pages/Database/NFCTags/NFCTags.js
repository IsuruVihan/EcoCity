import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import SideNav from "../../../common/SideNav";
import NFCTagsTableFilter from "./filters/NFCTagsTableFilter";
import NFCTagsTable from "./tables/NFCTagsTable";
import NFCTagViewModal from "./modals/NFCTagViewModal";
import CreateNFCTagModal from "./modals/CreateNFCTagModal";
import UpdateNFCTagModal from "./modals/UpdateNFCTagModal";
import Header from "../../../common/Header";

const NFCTags = () => {
  return (
      <Col className='' lg={10}>
          NFC Tags
      </Col>
      // <Container className='mx-0 px-0 h-100 overflow-hidden' fluid>
      //     <Header/>
      //     <Row className='mx-0 mt-72 container-section' >
      //         <SideNav/>
      //         <Col className='' lg={10}>
      //             NFC Tags
      //         </Col>
      //     </Row>
      // </Container>
  );
}

export default NFCTags;
