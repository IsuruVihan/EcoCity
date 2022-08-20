import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";

import AssignRideForm from "../forms/AssignRideForm";
import filtericon from "../../../assets/images/icons/filter.png";
import AssignRideMap from "../maps/AssignRideMap";


const AssignRideModal = () => {
  return (
    <Container style={{border:'1px solid red'}}>
        <Row>
            <Col style={{textAlign:'left', fontSize:14, fontWeight:'bold'}}>
                Location
            </Col>
            <Col style={{marginLeft:250}}>
                <Row style={{border:'2px solid #BFDDDE', borderRadius:10 , width:100,cursor:'pointer' }}>
                    <Col>
                        Filter
                    </Col>
                    <Col>
                        <Image src={filtericon} width='130%'/>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row style={{border:'1px solid green'}}>
            <AssignRideMap/>
        </Row>
        <Row style={{border:'1px solid yellow'}}>
            <AssignRideForm/>
        </Row>
    </Container>
  );
}

export default AssignRideModal;
