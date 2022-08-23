import React from 'react';
import {Col, Container, FormControl, Image, Row, Table} from "react-bootstrap";

import UpdateHouseNFCTagsTable from "../tables/UpdateHouseNFCTagsTable";
import UpdateHouseLocationMap from "../maps/UpdateHouseLocationMap";
import houseProfile from "../../../../assets/images/house-profile.png";
import {FiTrash2} from "react-icons/fi";

const UpdateHouseForm = (props) => {
    return (<Container>
        <Row>
            <Col lg={12} className='d-flex justify-content-center'><Image src={houseProfile} fluid
                                                                          style={{width: "70px"}}/></Col>
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
                    <Row className='mx-0'>
                        <Col lg={12} className='px-0 d-flex justify-content-end'>
                            <div className='modal-button  py-2 text-center c-pointer   '
                                 style={{backgroundColor: "#FF7373", color: "white"}}>Deactivate
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6}>
                    <Row className='mx-0 fs-6'>
                        <div className='fs-6 px-0'>NFC Tags</div>
                        <Col className='px-0'>
                            <Table className='my-0 fs-6 house-nfc-table' borderless>
                                <thead>
                                <tr className='table-header'>
                                    <td>#</td>
                                    <td>ID</td>
                                    <td>Serial Number</td>
                                    <td>Status</td>
                                    <td>Action</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>001</td>
                                    <td>NFC-1</td>
                                    <td>
                                        <div className='status status-active'>Active</div>
                                    </td>
                                    <td>
                                        <label style={{
                                            backgroundColor: "#FF7373",
                                            borderRadius: "8px",
                                            width: "25px",
                                            height: "25px"
                                        }} className='p-1 d-flex align-items-center justify-content-center'>
                                            <FiTrash2 style={{color: "white"}} className='m-0 c-pointer'/>
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>002</td>
                                    <td>NFC-2</td>
                                    <td>
                                        <div className='status status-active'>Active</div>
                                    </td>
                                    <td>
                                        <label style={{
                                            backgroundColor: "#FF7373",
                                            borderRadius: "8px",
                                            width: "25px",
                                            height: "25px"
                                        }} className='p-1 d-flex align-items-center justify-content-center'>
                                            <FiTrash2 style={{color: "white"}} className='m-0 c-pointer'/>
                                        </label>
                                    </td>

                                </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row className='mx-0 my-3'>
                        <div className='px-0 h5'>Location</div>

                        <Col lg={3} className='d-flex align-items-center px-2'>
                            <div>Latitude</div>
                        </Col>
                        <Col lg={9} className='my-2 px-0'>
                            <FormControl type={'text'} value={''}
                                         style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                        </Col>
                        <Col lg={3} className='d-flex align-items-center px-2'>
                            <div>Longitude</div>
                        </Col>
                        <Col lg={9} className='my-2 px-0'>
                            <FormControl type={'text'} value={''}
                                         style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                        </Col>
                        <div className='modal-map' style={{height: "120px", borderRadius: "15px"}}/>
                    </Row>
                    <Row>
                        <Col lg={12} className=' d-flex justify-content-end'>
                            <div className='modal-button save py-2 text-center c-pointer'>Save</div>
                        </Col>
                    </Row>
                </Col>

            </Row>
        </Row>
    </Container>);
}

export default UpdateHouseForm;
