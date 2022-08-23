import React from 'react';
import {Col, Container, FormControl, Image, Row} from "react-bootstrap";

import NewHouseLocationMap from "../maps/NewHouseLocationMap";
import houseProfile from "../../../../assets/images/house-profile.png";

const CreateHouseForm = () => {
    return (<Container>
        <Row>
            <Col lg={12} className='d-flex justify-content-center'><Image src={houseProfile} fluid
                                                                          style={{width: "100px"}}/></Col>
            <Row className='mx-0 px-0'>
                <Col lg={6} className='px-0'>
                    <Row className='mx-0  p-0'>
                        <Col lg={3} className='d-flex align-items-center px-0'>
                            <div>First Name</div>
                        </Col>
                        <Col lg={9} className='my-2 px-0'>
                            <FormControl type={'text'} value={''}
                                         style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                        </Col>
                    </Row>
                    <Row className='mx-0  p-0'>
                        <Col lg={3} className='d-flex align-items-center px-0'>
                            <div>Last Name</div>
                        </Col>
                        <Col lg={9} className='my-2 px-0'>
                            <FormControl type={'text'} value={''}
                                         style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                        </Col>
                    </Row>
                    <Row className='mx-0  p-0'>
                        <Col lg={3} className='d-flex align-items-center px-0'>
                            <div>NIC</div>
                        </Col>
                        <Col lg={9} className='my-2 px-0'>
                            <FormControl type={'text'} value={''}
                                         style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                        </Col>
                    </Row>
                    <Row className='mx-0  p-0'>
                        <Col lg={3} className='d-flex align-items-center px-0'>
                            <div>Address</div>
                        </Col>
                        <Col lg={9} className='my-2 px-0'>
                            <FormControl type={'text'} value={''}
                                         style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                        </Col>
                    </Row>
                    <Row className='mx-0  p-0'>
                        <Col lg={3} className='d-flex align-items-center px-0'>
                            <div></div>
                        </Col>
                        <Col lg={9} className='my-2 px-0'>
                            <FormControl type={'text'} value={''}
                                         style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                        </Col>
                    </Row>
                    <Row className='mx-0  p-0'>
                        <Col lg={3} className='d-flex align-items-center px-0'>
                            <div></div>
                        </Col>
                        <Col lg={9} className='my-2 px-0'>
                            <FormControl type={'text'} value={''}
                                         style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                        </Col>
                    </Row>
                    <Row className='mx-0  p-0'>
                        <Col lg={3} className='d-flex align-items-center px-0'>
                            <div>Email</div>
                        </Col>
                        <Col lg={9} className='my-2 px-0'>
                            <FormControl type={'email'} value={''}
                                         style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                        </Col>
                    </Row>

                </Col>
                <Col lg={6}>
                    <Row className='mx-0  p-0'>
                        <Col lg={3} className='d-flex align-items-center px-0'>
                            <div>Password</div>
                        </Col>
                        <Col lg={9} className='my-2 px-0'>
                            <FormControl type={'password'} value={''}
                                         style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                        </Col>
                    </Row>
                    <Row className='mx-0  p-0'>
                        <Col lg={3} className='d-flex align-items-center px-0'>
                            <div>Re-enter Password</div>
                        </Col>
                        <Col lg={9} className='my-2 px-0'>
                            <FormControl type={'password'} value={''}
                                         style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                        </Col>
                    </Row>
                    <Row className='mx-0 my-3'>
                        <div className='px-0 h5'>Location</div>

                        <Col lg={3} className='d-flex align-items-center px-0'>
                            <div>Latitude</div>
                        </Col>
                        <Col lg={9} className='my-2 px-0'>
                            <FormControl type={'text'} value={''}
                                         style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                        </Col>
                        <Col lg={3} className='d-flex align-items-center px-0'>
                            <div>Longitude</div>
                        </Col>
                        <Col lg={9} className='my-2 px-0'>
                            <FormControl type={'text'} value={''}
                                         style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                        </Col>
                        <div className='modal-map' style={{height: "120px", borderRadius: "15px"}}/>
                    </Row>
                </Col>
                <Col lg={12} className=' d-flex justify-content-end'>
                    <div className='modal-button save py-2 text-center c-pointer'>Save</div>
                </Col>
            </Row>
        </Row>
    </Container>);
}

export default CreateHouseForm;
