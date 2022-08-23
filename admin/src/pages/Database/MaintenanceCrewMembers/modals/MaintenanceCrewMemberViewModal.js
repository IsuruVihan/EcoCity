import React, {Fragment} from 'react';
import {Col, Container, FormControl, Modal, Row, Table} from "react-bootstrap";

import MaintenanceCrewMemberLocationMap from "../maps/MaintenanceCrewMemberLocationMap";
import NFCTagsTable from "../tables/NFCTagsTable";
import JobDetailsTable from "../tables/JobDetailsTable";
import MaintenanceJobLineGraph from "../graphs/MaintenanceJobLineGraph";
import MaintenanceJobLineGraphFilter from "../filters/MaintenanceJobLineGraphFilter";
import CollectionRidesFilter from "../../TruckDrivers/filters/CollectionRidesFilter";
import JobsGraphFilter from "../../GarbageTrucks/filters/JobsGraphFilter";
import JobsPieGraph from "../../GarbageTrucks/graphs/JobsPieGraph";
import JobsLineGraph from "../../GarbageTrucks/graphs/JobsLineGraph";
import JobsGraph from "../../TruckDrivers/graphs/JobsGraph";

const MaintenanceCrewMemberViewModal = (props) => {
    const member = props.truck;
    console.log(member)
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
                    Crew Member Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="mx-0 ">
                    <Col lg={6} className='px-3 '>
                        <Row className='mx-0 px-0 mt-1'>
                            <Col lg={3} className='px-0 d-flex align-items-center'>
                                <div>Member ID</div>
                            </Col>
                            <Col lg={9} className='px-0'>
                                <FormControl type={'text'} disabled value={member.id}
                                             style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                            </Col>
                        </Row>
                        <Row className='mx-0 px-0 mt-1'>
                            <Col lg={3} className='px-0 d-flex align-items-center'>
                                <div>First Name</div>
                            </Col>
                            <Col lg={9} className='px-0'>
                                <FormControl type={'text'} disabled value={member.name}
                                             style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                            </Col>
                        </Row>
                        <Row className='mx-0 px-0 mt-1'>
                            <Col lg={3} className='px-0 d-flex align-items-center'>
                                <div>Last Name</div>
                            </Col>
                            <Col lg={9} className='px-0'>
                                <FormControl type={'text'} disabled value={member.name}
                                             style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                            </Col>
                        </Row>
                        <Row className='mx-0 px-0 mt-1'>
                            <Col lg={3} className='px-0 d-flex align-items-center'>
                                <div>NIC</div>
                            </Col>
                            <Col lg={9} className='px-0'>
                                <FormControl type={'text'} disabled value={member.nic}
                                             style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                            </Col>
                        </Row>
                        <Row className='mx-0 px-0 mt-1'>
                            <Col lg={3} className='px-0 d-flex align-items-center'>
                                <div>Email</div>
                            </Col>
                            <Col lg={9} className='px-0'>
                                <FormControl type={'email'} disabled value={member.email}
                                             style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                            </Col>
                        </Row>
                        <Row className='mx-0 px-0 mt-1'>
                            <Col lg={3} className='px-0 d-flex align-items-center'>
                                <div>Status</div>
                            </Col>
                            <Col lg={9} className='px-0'>
                                <FormControl type={'text'} disabled value={member.status}
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
                        <Row className='mx-0 mt-3'>
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
                        <Row className='mx-0 mt-3'>
                            <Col lg={10} className='h6 px-0'>Total number of maintenance jobs:</Col>
                            <Col lg={2} className={'px-0'}><MaintenanceJobLineGraphFilter/></Col>
                            <Col lg={12} className='mb-5'>
                                <MaintenanceJobLineGraph/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default MaintenanceCrewMemberViewModal;
