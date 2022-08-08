import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";

import RemarksForm from "../forms/RemarksForm";

import modelimage from "../../../assets/images/view-complaint.png";

const ViewComplaintModal = () => {
  return (
    <Container>
      <Row>
        <Col style={{textAlign:'center'}}>
          <Image src={modelimage} fluid style={{width:'30%'}}/>
        </Col>
      </Row>
      <Row style={{border:'1px solid green', marginTop:15}}>
        <Col>
          <Row style={{border:'1px solid green', textAlign:'center'}} >
            <Col
                style={{border:'1px solid pink', marginLeft:130, marginRight:130, backgroundColor:'#E1F0FF', color:'#008BD1', fontWeight:'bold', padding:5, borderRadius:10}} >
              Viewed Complaint
            </Col>
          </Row>
          <Row>
            <RemarksForm/>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ViewComplaintModal;
