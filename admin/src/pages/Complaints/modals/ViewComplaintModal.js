import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";

import RemarksForm from "../forms/RemarksForm";

import modelimage from "../../../assets/images/view-complaint.png";

const ViewComplaintModal = () => {
  return (
    <Container>
        <Row>
            <Col style={{textAlign:'center'}}>
                <Image src={modelimage} fluid style={{width:'25%'}}/>
            </Col>
        </Row>
        <Row style={{border:'1px solid green'}}>
            <Col>
                <Row style={{border:'1px solid green', textAlign:'center'}} className="d-flex">
                    <Col
                        style={{marginRight:130, marginLeft:130,marginTop:8, backgroundColor:'#E1F0FF', borderRadius:10, color:'#008BD1', padding:5, fontWeight:'bold'}}>
                        Viewed Complaints
                    </Col>
                </Row>
                <Row style={{marginTop:10}}>
                    <RemarksForm/>
                </Row>
            </Col>
        </Row>
    </Container>
  );
}

export default ViewComplaintModal;
