import React from "react";
import {Container, Modal, Button, Row, Col, FormControl, Table} from "react-bootstrap";

import TruckDriverLocationMap from "../maps/TruckDriverLocationMap";
import NFCTagsTable from "../tables/NFCTagsTable";
import JobDetailsTable from "../tables/JobDetailsTable";
import JobsGraph from "../graphs/JobsGraph";
import JobsGraphFilter from "../filters/JobsGraphFilter";
import GarbageHubCollectedWeightsGraphFilter from "../../GarbageHubs/filters/GarbageHubCollectedWeightsGraphFilter";
import GarbageHubCollectedWeightsGraph from "../../GarbageHubs/graphs/GarbageHubCollectedWeightsGraph";

import '../../../../assets/styles/common/admin.css'
import '../../../../assets/styles/Database/Truck Driver/truckDriver.css'

const ViewTruckDriverModal = (props) => {
    const driver = props.driver;
    if (!driver) return;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="modal-70w"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Truck Driver Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="mx-0 ">
                    <Col lg={6} className='px-0 '>
                        <Row className='mx-0 px-0 mt-1'>
                            <Col lg={3} className='px-0 d-flex align-items-center'>
                                <div>Driver ID</div>
                            </Col>
                            <Col lg={9} className='px-0'>
                                <FormControl type={'text'} disabled value={driver.id}
                                             style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                            </Col>
                        </Row>
                        <Row className='mx-0 px-0 mt-1'>
                            <Col lg={3} className='px-0 d-flex align-items-center'>
                                <div>First Name</div>
                            </Col>
                            <Col lg={9} className='px-0'>
                                <FormControl type={'text'} disabled value={driver.name}
                                             style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                            </Col>
                        </Row>
                        <Row className='mx-0 px-0 mt-1'>
                            <Col lg={3} className='px-0 d-flex align-items-center'>
                                <div>Last Name</div>
                            </Col>
                            <Col lg={9} className='px-0'>
                                <FormControl type={'text'} disabled value={driver.name}
                                             style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                            </Col>
                        </Row>
                        <Row className='mx-0 px-0 mt-1'>
                            <Col lg={3} className='px-0 d-flex align-items-center'>
                                <div>NIC</div>
                            </Col>
                            <Col lg={9} className='px-0'>
                                <FormControl type={'text'} disabled value={driver.nic}
                                             style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                            </Col>
                        </Row>
                        <Row className='mx-0 px-0 mt-1'>
                            <Col lg={3} className='px-0 d-flex align-items-center'>
                                <div>Email</div>
                            </Col>
                            <Col lg={9} className='px-0'>
                                <FormControl type={'text'} disabled value={driver.email}
                                             style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                            </Col>
                        </Row>
                        <Row className='mx-0 px-0 mt-1'>
                            <Col lg={3} className='px-0 d-flex align-items-center'>
                                <div>Status</div>
                            </Col>
                            <Col lg={9} className='px-0'>
                                <FormControl type={'text'} disabled value={driver.status}
                                             style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                            </Col>
                        </Row>

                        <Row className='mx-0 my-3'>
                            <div className='px-0 h5'>Location</div>
                            <div className='modal-map' style={{height: "150px", borderRadius: "15px"}}/>
                        </Row>
                    </Col>
                    <Col lg={6} className=''>
                        <Row className='mx-0 fs-6'>
                            <div className='fs-6 px-0'>NFC Tags</div>
                            <Col className='px-0'>
                                <Table className='my-0 fs-6 driver-table' borderless>
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
                        <Row className='mx-0 mt-2'>
                            <div className='fs-6 px-0'>Job Details</div>
                            <Table className='my-0 driver-table' borderless>
                                <thead>
                                <tr className='table-header'>
                                    <td>#</td>
                                    <td>ID</td>
                                    <td>Date</td>
                                    <td>Status</td>
                                    <td>Action</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>001</td>
                                    <td>2022/08/24</td>
                                    <td>
                                        <div className='status status-ongoing'>Ongoing</div>
                                    </td>
                                    <td>
                                        <div className='status view'>View</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>002</td>
                                    <td>2022/08/25</td>
                                    <td>
                                        <div className='status status-assigned'>Assigned</div>
                                    </td>
                                    <td>
                                        <div className='status view'>View</div>
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                        </Row>
                        <Row className='mx-0 mt-2'>
                            <Col lg={10} className='h6 px-0'>Total number of collected jobs:</Col>
                            <Col lg={2} className={'px-0'}><JobsGraphFilter/></Col>
                            <Col lg={12} className='mb-5'>
                                <JobsGraph/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
};

export default ViewTruckDriverModal;
