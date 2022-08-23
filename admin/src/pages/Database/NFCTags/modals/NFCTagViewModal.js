import React from 'react';
import {Col, Container, FormControl, FormSelect, Modal, Row, Table} from "react-bootstrap";

import NFCTagUsesTable from "../tables/NFCTagUsesTable";
import TotalNFCTagUsageLineGraph from "../graphs/TotalNFCTagUsageLineGraph";
import TotalNFCTagUsageLineGraphFilter from "../filters/TotalNFCTagUsageLineGraphFilter";
import DisposedGarbageWeightTableFilter from "../../Houses/filters/DisposedGarbageWeightTableFilter";
import {FiTrash2} from "react-icons/fi";
import MaintenanceJobLineGraph from "../../MaintenanceCrewMembers/graphs/MaintenanceJobLineGraph";

const NFCTagViewModal = (props) => {
    const tag = props.tag;
    console.log(tag)
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
                    NFC Tag Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="mx-0 ">
                    <Col lg={6} className='px-3 '>
                        <Row className='mx-0 px-0 mt-1'>
                            <Col lg={3} className='px-0 d-flex align-items-center'>
                                <div>NFC Tag ID</div>
                            </Col>
                            <Col lg={9} className='px-0'>
                                <FormControl type={'text'} disabled value={tag.id}
                                             style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                            </Col>
                        </Row>
                        <Row className='mx-0 px-0 mt-1'>
                            <Col lg={3} className='px-0 d-flex align-items-center'>
                                <div>Serial Number</div>
                            </Col>
                            <Col lg={9} className='px-0'>
                                <FormControl type={'text'} disabled value={tag.name}
                                             style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                            </Col>
                        </Row>
                        <Row className='mx-0 fw-bold mt-3'>User's</Row>
                        <Row className='mx-0 px-0 mt-1'>
                            <Col lg={3} className='px-0 d-flex align-items-center'>
                                <div>First Name</div>
                            </Col>
                            <Col lg={9} className='px-0'>
                                <FormControl type={'text'} disabled value={tag.name}
                                             style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                            </Col>
                        </Row>
                        <Row className='mx-0 px-0 mt-1'>
                            <Col lg={3} className='px-0 d-flex align-items-center'>
                                <div>Last Name</div>
                            </Col>
                            <Col lg={9} className='px-0'>
                                <FormControl type={'text'} disabled value={tag.nic}
                                             style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                            </Col>
                        </Row>
                        <Row className='mx-0 px-0 mt-1'>
                            <Col lg={3} className='px-0 d-flex align-items-center'>
                                <div>User Type</div>
                            </Col>
                            <Col lg={9} className='px-0'>
                                <FormSelect disabled>
                                    <option value='Driver'>Driver</option>
                                    <option value='Maintenance'>Maintenance</option>
                                    <option value='House'>House</option>
                                </FormSelect>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <Row className='mx-0 fs-6'>
                            <div className='fs-6 px-0'>NFC Tag Usage</div>
                            <Col className='px-0'>
                                <Table className='my-0 fs-6' borderless>
                                    <thead>
                                    <tr className='table-header'>
                                        <td>#</td>
                                        <td>Date</td>
                                        <td>User ID</td>
                                        <td>User Type</td>
                                        <td>Hub ID</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>23/02/2022</td>
                                        <td>123</td>
                                        <td> Driver</td>
                                        <td> CMB-1</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>24/02/2022</td>
                                        <td>456</td>
                                        <td> Citizen</td>
                                        <td> CMB-2</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>


                        <Row className='mx-0 mt-3 mb-5'>
                            <Col lg={10} className='h6 px-0'>Total number of NFC tag uses:</Col>
                            <Col lg={2} className={'px-0'}>
                                <TotalNFCTagUsageLineGraphFilter/>
                            </Col>
                            <Col lg={12} className='mb-5'>
                                <TotalNFCTagUsageLineGraph/>
                            </Col>
                        </Row>


                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default NFCTagViewModal;
