import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";

import AssignJobForm from "../forms/AssignJobForm";
import modelimage1 from "../../../assets/images/view-complaint.png"

const AssignJobModal = () => {
  return (
    <Container className='p-0 m-0'>
      <Row className='p-0 m-0' style={{border:'2px solid green'}}>
        <Col className={'m-0 p-0'} style={{textAlign:'center'}}>
          <Image src={modelimage1} fluid style={{width:'20%'}}/>
        </Col>
      </Row>
      <Row style={{border:'1px solid red'}} className='p-0 m-0'>
        <AssignJobForm/>
      </Row>

    </Container>
  );
}

export default AssignJobModal;
