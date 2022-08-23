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
                    <Col lg={6} className=''>
                        <Row className='mx-0'>
                            <Col className='px-0 fw-bold' lg={10}>Job Details</Col>
                            <Col className='px-0' lg={2}><JobsGraphFilter/></Col>
                        </Row>
                        <Row className='mx-0 mt-3'>
                            <Col lg={6} className='p-3'>
                                <JobsPieGraph/>
                                <div className='position-absolute ms-5  fw-bolder'
                                     style={{color: "#042434", top: "22%", right: "31%", fontSize: "65px"}}>
                                    <label className='ms-4 mb-5'>76</label><label className='fs-5'>%</label>
                                </div>
                            </Col>
                            <Col lg={6} className='px-0 d-flex fs-3 align-items-center'>Completed Job Percentage</Col>
                        </Row>

                        <Row className='mx-0'>
                            <div>Total number of collected jobs</div>
                            <JobsLineGraph/>
                        </Row>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default MaintenanceCrewMemberViewModal;
