import React from 'react';
import {Col, Container, FormControl, Modal, Row, Table} from "react-bootstrap";

import HouseLocationMap from "../maps/HouseLocationMap";
import NFCTagsTable from "../tables/NFCTagsTable";
import DisposedGarbageWeightTableFilter from "../filters/DisposedGarbageWeightTableFilter";
import DisposedGarbageWeightTable from "../tables/DisposedGarbageWeightTable";
import MaintenanceJobLineGraphFilter from "../../MaintenanceCrewMembers/filters/MaintenanceJobLineGraphFilter";
import MaintenanceJobLineGraph from "../../MaintenanceCrewMembers/graphs/MaintenanceJobLineGraph";
import {FiTrash2} from "react-icons/fi";

const ViewHouseModal = (props) => {
    const house = props.house;
    console.log(house)
    const collectionArr = Array.from(Array(7).keys());
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="modal-60w"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    House Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="mx-0 ">
                    <Col lg={6} className='px-3 '>
                        <Row className='mx-0 px-0 mt-1'>
                            <Col lg={3} className='px-0 d-flex align-items-center'>
                                <div>House ID</div>
                            </Col>
                            <Col lg={9} className='px-0'>
                                <FormControl type={'text'} disabled value={house.id}
                                             style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                            </Col>
                        </Row>
                        <Row className='mx-0 px-0 mt-1'>
                            <Col lg={3} className='px-0 d-flex align-items-center'>
                                <div>Owner's Name</div>
                            </Col>
                            <Col lg={9} className='px-0'>
                                <FormControl type={'text'} disabled value={house.name}
                                             style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                            </Col>
                        </Row>
                        <Row className='mx-0 px-0 mt-1'>
                            <Col lg={3} className='px-0 d-flex align-items-center'>
                                <div>Last Name</div>
                            </Col>
                            <Col lg={9} className='px-0'>
                                <FormControl type={'text'} disabled value={house.name}
                                             style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                            </Col>
                        </Row>
                        <Row className='mx-0 px-0 mt-1'>
                            <Col lg={3} className='px-0 d-flex align-items-center'>
                                <div>NIC</div>
                            </Col>
                            <Col lg={9} className='px-0'>
                                <FormControl type={'text'} disabled value={house.nic}
                                             style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                            </Col>
                        </Row>
                        <Row className='mx-0 px-0 mt-1'>
                            <Col lg={3} className='px-0 d-flex align-items-center'>
                                <div>Email</div>
                            </Col>
                            <Col lg={9} className='px-0'>
                                <FormControl type={'email'} disabled value={house.email}
                                             style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                            </Col>
                        </Row>
                        <Row className='mx-0 px-0 mt-1'>
                            <Col lg={3} className='px-0 d-flex align-items-center'>
                                <div>Status</div>
                            </Col>
                            <Col lg={9} className='px-0'>
                                <FormControl type={'text'} disabled value={house.status}
                                             style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                            </Col>
                        </Row>
                        <Row className='mx-0 my-3'>
                            <div className='px-0 h5'>Location</div>
                            <div className='modal-map' style={{height: "150px", borderRadius: "15px"}}/>
                        </Row>

                    </Col>
                    <Col lg={6}>
                        <Row className='mx-0 fs-6'>
                            <div className='fs-6 px-0'>NFC Tags</div>
                            <Col className='px-0'>
                                <Table className='my-0 fs-6' borderless>
                                    <thead>
                                    <tr className='table-header'>
                                        <td>#</td>
                                        <td>ID</td>
                                        <td>Serial Number</td>
                                        <td>Status</td>
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
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>002</td>
                                        <td>NFC-2</td>
                                        <td>
                                            <div className='status status-active'>Active</div>
                                        </td>

                                    </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>


                        <Row className='mx-0 mt-3'>
                            <Col lg={10} className='h6 px-0'>Weight of disposed garbage:</Col>
                            <Col lg={2} className={'px-0'}><DisposedGarbageWeightTableFilter/></Col>
                        </Row>

                        <Row className='mx-0 fs-6'>
                            <Col className='px-0 mt-3'>
                                <Table className='my-0 fs-6' borderless>
                                    <thead>
                                    <tr className='table-header'>
                                        <td>#</td>
                                        <td>Bin Type</td>
                                        <td>Type</td>
                                        <td>Weight (KG)</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td><FiTrash2 size='20px' color='#4FA7FF' style={{opacity: "1"}}/></td>
                                        <td>Glass</td>
                                        <td>
                                            1
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td><FiTrash2 size='20px' color='#FFAF3F' style={{opacity: "1"}}/></td>
                                        <td>Paper</td>
                                        <td>
                                            0.8
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td><FiTrash2 size='20px' color='#00E17F' style={{opacity: "1"}}/></td>
                                        <td>Organic</td>
                                        <td>
                                            1.2
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td><FiTrash2 size='20px' color='#FA7A7A' style={{opacity: "1"}}/></td>
                                        <td>Plastic</td>
                                        <td>
                                            0.73
                                        </td>
                                    </tr>

                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default ViewHouseModal;
