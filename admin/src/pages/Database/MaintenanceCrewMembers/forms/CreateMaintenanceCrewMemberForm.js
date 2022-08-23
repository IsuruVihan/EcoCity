import React from 'react';
import {Col, Container, FormControl, Image, Row} from "react-bootstrap";
import memberProfile from "../../../../assets/images/crew-profile.png";

const CreateMaintenanceCrewMemberForm = () => {
    return (
        <Container>
            <Row>
                <Col lg={12} className='d-flex justify-content-center'><Image src={memberProfile} fluid
                                                                              style={{width: "100px"}}/></Col>
                <Col lg={3} className='d-flex align-items-center '>
                    <div>First Name</div>
                </Col>
                <Col lg={9} className='my-2'>
                    <FormControl type={'text'} value={''}
                                 style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                </Col>
                <Col lg={3} className='d-flex align-items-center '>
                    <div>Last Name</div>
                </Col>
                <Col lg={9} className='my-2'>
                    <FormControl type={'text'} value={''}
                                 style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                </Col>
                <Col lg={3} className='d-flex align-items-center '>
                    <div>NIC</div>
                </Col>
                <Col lg={9} className='my-2'>
                    <FormControl type={'text'} value={''}
                                 style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                </Col>
                <Col lg={3} className='d-flex align-items-center '>
                    <div>Email</div>
                </Col>
                <Col lg={9} className='my-2'>
                    <FormControl type={'text'} value={''}
                                 style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                </Col>
                <Col lg={3} className='d-flex align-items-center '>
                    <div>Password</div>
                </Col>
                <Col lg={9} className='my-2'>
                    <FormControl type={'text'} value={''}
                                 style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                </Col>
                <Col lg={3} className='d-flex align-items-center '>
                    <div>Re-enter Password</div>
                </Col>
                <Col lg={9} className='my-2'>
                    <FormControl type={'password'} value={''}
                                 style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                </Col>

                <Col lg={12} className='my-2 d-flex justify-content-center'>
                    <div className='modal-button cancel py-2 text-center me-3 c-pointer'>Cancel</div>
                    <div className='modal-button save py-2 text-center c-pointer'>Save</div>
                </Col>
            </Row>
        </Container>
    );
}

export default CreateMaintenanceCrewMemberForm;
